import express, { json } from "express";
import itemsRoute from "./routes/itemsRoute.js";
const app = express();
const port = process.env.PORT || 3000;

app.use(json());

app.use("/api/item", itemsRoute);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
