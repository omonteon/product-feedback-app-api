import express from "express";
import cors from "cors";
import productFeedback from "./src/routes/product-feedback.js";
import feedbackRouter from "./src/routes/feedbackRouter.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
// app.use("/product-feedback", productFeedback);
app.use("/feedback", feedbackRouter);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
