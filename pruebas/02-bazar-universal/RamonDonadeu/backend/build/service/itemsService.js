"use strict";
const { Router } = require("express");
const {
  getProductById,
  getProductByQuery
} = require("../models/itemsModel.js");
const router = Router();
const getItemById = (id) => {
  return getProductById(id);
};
const getItemsByQuery = (query) => {
  return getProductByQuery(query);
};
module.exports = { getItemById, getItemsByQuery };
//# sourceMappingURL=itemsService.js.map
