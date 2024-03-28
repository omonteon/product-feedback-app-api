//Data access object
import db from "./db/connection.js";
// This help convert the id from string to ObjectId for the _id.
import { ObjectId } from "mongodb";

async function listAll() {
  let collection = await db.collection("feedback");
  let results = await collection.find({}).toArray();
  return results;
}

async function listById(id) {
  let collection = await db.collection("feedback");
  let query = { _id: new ObjectId(id) };
  return await collection.findOne(query);
}

export { listAll, listById };
