const { Router } = require("express");
const { getItem, getItemsQuery } = require("../controller/itemsController.js");
const router = Router();

// GET all items
router.get("/:id", getItem);

// GET item by  `/api/items?q=:query`
router.get("/", getItemsQuery);

module.exports = router;
