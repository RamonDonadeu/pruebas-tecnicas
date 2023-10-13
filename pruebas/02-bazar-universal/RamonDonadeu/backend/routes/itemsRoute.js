import { Router } from "express";
const router = Router();
import { getItem, getItemsQuery } from "../controller/itemsController.js";

// GET all items
router.get("/:id", getItem);

// GET item by  `/api/items?q=:query`
router.get("/", getItemsQuery);

export default router;
