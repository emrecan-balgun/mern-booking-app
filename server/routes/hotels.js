import express from "express";

import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";

const router = express.Router();


router.post("/", createHotel); // Create
router.get("/", getHotels); // Read (All)
router.get("/:id", getHotel); // Read (One)
router.put("/:id", updateHotel); // Update
router.delete("/:id", deleteHotel); // Delete

export default router;
