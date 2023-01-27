import express from "express";

import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, createHotel); // Create
router.get("/", getHotels); // Read (All)
router.get("/find/:id", getHotel); // Read (One)
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);
router.put("/:id", verifyAdmin, updateHotel); // Update
router.delete("/:id", verifyAdmin, deleteHotel); // Delete

export default router;
