"use strict";
const { Router } = require("express");
const { getItem, getItemsQuery } = require("../controller/itemsController.js");
const router = Router();
router.get("/:id", getItem);
router.get("/", getItemsQuery);
module.exports = router;
//# sourceMappingURL=itemsRoute.js.map
