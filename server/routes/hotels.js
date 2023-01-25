import express from "express";

import {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel); // Create
router.get("/", getHotels); // Read (All)
router.get("/:id", getHotel); // Read (One)
router.put("/:id", verifyAdmin, updateHotel); // Update
router.delete("/:id", verifyAdmin, deleteHotel); // Delete

export default router;
