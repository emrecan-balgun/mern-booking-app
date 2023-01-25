import express from "express";

import { login, register } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register); // Register
router.post("/login", login); // Login

export default router;