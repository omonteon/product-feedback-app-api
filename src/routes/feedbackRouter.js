import express from "express";
import { listAllEndpoint } from "../controller/feedbackController.js";

const router = express.Router();

router.get("/", listAllEndpoint)

export default router;