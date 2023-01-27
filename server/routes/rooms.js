import express from "express";

import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/Room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

router.post("/:hotelid", verifyAdmin, createRoom); // Create
router.get("/", getRooms); // Read (All)
router.get("/:id", getRoom); // Read (One)
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", verifyAdmin, updateRoom); // Update
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom); // Delete

export default router;
