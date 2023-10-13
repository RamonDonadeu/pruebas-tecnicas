import { Router } from "express";
const router = Router();
import { getProductById, getProductByQuery } from "../models/itemsModel.js";

const getItemById = (id) => {
  return getProductById(id);
};

const getItemsByQuery = (query) => {
  return getProductByQuery(query);
};

export { getItemById, getItemsByQuery };
