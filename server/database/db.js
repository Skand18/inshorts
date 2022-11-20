import mongoose from "mongoose";

const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@clone-inshorts.dywlzzy.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, { useNewUrlParser: true });
    console.log("Connected to mongodb server");
  } catch (err) {
    console.log("error while connecting to database ", err);
  }
};

export default Connection;
