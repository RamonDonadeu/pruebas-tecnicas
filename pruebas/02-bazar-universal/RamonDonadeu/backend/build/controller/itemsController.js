"use strict";
const { Router } = require("express");
const { getItemById, getItemsByQuery } = require("../service/itemsService.js");
const router = Router();
const getItem = (req, res) => {
  const item = getItemById(parseInt(req.params.id));
  res.send(item);
};
const getItemsQuery = (req, res) => {
  const itemList = getItemsByQuery(req.query.q);
  res.send(itemList);
};
module.exports = { getItem, getItemsQuery };
//# sourceMappingURL=itemsController.js.map
