import { Router } from "express";
import {
  checkCommentController,
  commentController,
  editCommentController,
  getBookController,
  getBookDetailController,
  getFilterController,
  getReviewsController,
} from "../Controllers/bookController.js";
import { verifyToken } from "../middlewares/jwtMiddlewares.js";

export const bookRouter = Router();

bookRouter.post("/getBook", getBookController);
bookRouter.get("/getFilter", getFilterController);
bookRouter.post("/getBookDetail", getBookDetailController);
bookRouter.post("/comment", verifyToken, commentController);
bookRouter.post("/checkComment", verifyToken, checkCommentController);
bookRouter.post("/editComment", verifyToken, editCommentController);
bookRouter.post("/getReviews", getReviewsController);
