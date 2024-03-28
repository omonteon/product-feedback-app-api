import express from "express";
import {
  listAllEndpoint,
  listByIdEndpoint,
} from "../controller/feedbackController.js";

const router = express.Router();

router.get("/", listAllEndpoint);
router.get("/:id", listByIdEndpoint);

export default router;
