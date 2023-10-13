import { Router } from "express";
const router = Router();
import { getItemById, getItemsByQuery } from "../service/itemsService.js";

const getItem = (req, res) => {
  const item = getItemById(parseInt(req.params.id));
  res.send(item);
};

const getItemsQuery = (req, res) => {
  const itemList = getItemsByQuery(req.query.q);
  res.send(itemList);
};

export { getItem, getItemsQuery };
