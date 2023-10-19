import express, { json } from "express";
import itemsRoute from "./routes/itemsRoute.js";
import functions from "firebase-functions";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());
app.use(json());

app.use("/api/item", itemsRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

exports.api = functions.https.onRequest(app);
