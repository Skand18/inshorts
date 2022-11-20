import { data } from "./constants/data.js";
import news from "./model/news-schema.js";

const DefaultData = async () => {
  try {
    await news.insertMany(data);
    console.log("Data inserted");
  } catch (err) {
    console.log("error", err.message);
  }
};

export default DefaultData;
