"use strict";
const express = require("express");
const { json } = require("express");
const itemsRoute = require("./routes/itemsRoute.js");
const cors = require("cors");
const app = express();
const port = 3e3;
app.use(cors());
app.use(json());
app.use("/api/item", itemsRoute);
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
//# sourceMappingURL=index.js.map
