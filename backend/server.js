const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ObjectID } = require("mongodb");
const assert = require("assert");

const app = express();
app.use(bodyParser.json());

const MongoUrl = "mongodb://localhost:27017";
const dataBase = "contactList";

MongoClient.connect(MongoUrl, { useNewUrlParser: true }, (err, client) => {
  assert.equal(err, null, "dataBase connection failed");
  const db = client.db(dataBase);
  app.post("/add-contact", (req, res) => {
    let newContact = req.body;
    db.collection("contact").insertOne(newContact, (err, data) => {
      if (err) res.send("cannot add new contact");
      else res.send("new contact added");
    });
  });
  app.get("/contact", (req, res) => {
    db.collection("contact")
      .find()
      .toArray()
      .then(contacts => res.json(contacts))
      .catch(err => res.status(404).json({ nopostsfound: "No contact found" }));
  });

  app.get("/contact/:id", (req, res) => {
    let contactId = ObjectID(req.params.id);
    db.collection("contact").findOne({ _id: contactId }, (err, data) => {
      if (err) res.send("canot get contact");
      else res.send(data);
    });
  });

  app.put("/contact/:id", (req, res) => {
    let contactID = ObjectID(req.params.id);
    let updateContact = req.body;
    console.log(req.body);
    db.collection("contact").findOneAndUpdate(
      { _id: contactID },
      { $set: { ...updateContact } },
      (err, data) => {
        if (err) res.send(err);
        else res.send(data);
      }
    );
  });

  app.delete("/contact/:id", (req, res) => {
    let contactID = ObjectID(req.params.id);
    db.collection("contact")
      .deleteOne({ _id: contactID })
      .then(contact => res.json(contact))
      .catch(
        err => res.status(404).json({ nopostsfound: "cannot delet contact" }) // console.log(err)
      );
  });
});

app.listen(5000, err => {
  if (err) console.log("server erreur");
  else console.log("server is running on port 5000");
});
