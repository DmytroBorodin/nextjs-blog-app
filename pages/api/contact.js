const { MongoClient } = require("mongodb");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(500).json({ message: "Invalid input value" });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.rptrona.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

    try {
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      res.status(500).json({ message: error });
      return;
    }

    const db = client.db();
    let result;
    try {
      result = await db.collection("my-blog").insertOne(newMessage);
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing message is failed" });
      return;
    }

    console.log(newMessage, result);
    client.close();
    res.status(201).json({ message: "Success!" });
  }
}
