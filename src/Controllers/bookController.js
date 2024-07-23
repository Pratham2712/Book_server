import { FAILURE, SUCCESS } from "../constants/constants.js";
import {
  checkCommentService,
  commentService,
  editCommentService,
  getBookDetailService,
  getBookService,
  getFilterService,
  getReviewsService,
} from "../service/bookService.js";

export const getBookController = async (req, res, next) => {
  try {
    const data = req.body;
    const filter = {
      page: data.page || 0,
      pagesize: data.pagesize || 8,
      word: data.word || "",
      author: Array.isArray(data.author) ? data.author : [],
      language: Array.isArray(data.language) ? data.language : [],
    };

    const result = await getBookService(filter);
    if (result) {
      return res.status(200).json({
        type: SUCCESS,
        message: "Fetch successfully",
        data: result,
      });
    } else {
      return res.status(400).json({
        type: FAILURE,
        message: "Failed to fetch",
      });
    }
  } catch (error) {
    next(error);
  }
};

export const getFilterController = async (req, res, next) => {
  try {
    const result = await getFilterService();
    if (result) {
      const authorsSet = new Set();
      const languagesSet = new Set();

      result.forEach((item) => {
        item.author.forEach((author) => authorsSet.add(author));
        languagesSet.add(item.language);
      });

      const uniqueAuthors = Array.from(authorsSet);
      const uniqueLanguages = Array.from(languagesSet);
      return res.status(200).json({
        type: SUCCESS,
        message: "Fetch successfully",
        data: {
          uniqueAuthors: uniqueAuthors,
          uniqueLanguages: uniqueLanguages,
        },
      });
    } else {
      return res.status(400).json({
        type: FAILURE,
        message: "Failed to fetch",
      });
    }
  } catch (error) {
    next(error);
  }
};
export const getBookDetailController = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await getBookDetailService(data);
    if (result) {
      return res.status(200).json({
        type: SUCCESS,
        message: "Fetched successfully",
        data: result,
      });
    } else {
      return res.status(400).json({
        type: FAILURE,
        message: "Failed to fetch",
        errors: [],
      });
    }
  } catch (error) {
    next(error);
  }
};
export const commentController = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await commentService(data);
    if (result) {
      return res.status(200).json({
        type: SUCCESS,
        message: "Post successfully",
        data: result,
      });
    } else {
      return res.status(400).json({
        type: FAILURE,
        message: "Failed to post",
        errors: [],
      });
    }
  } catch (error) {
    next(error);
  }
};
export const checkCommentController = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await checkCommentService(data);
    if (result) {
      return res.status(200).json({
        type: SUCCESS,
        message: "Comment found successfully",
        data: result,
      });
    } else {
      return res.status(400).json({
        type: FAILURE,
        message: "No comment ",
        errors: [],
      });
    }
  } catch (error) {
    next(error);
  }
};
export const editCommentController = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await editCommentService(data);
    if (result) {
      return res.status(200).json({
        type: SUCCESS,
        message: "Comment edited successfully",
        data: result,
      });
    } else {
      return res.status(400).json({
        type: FAILURE,
        message: "Failed to comment",
        errors: [],
      });
    }
  } catch (error) {
    next(error);
  }
};

export const getReviewsController = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await getReviewsService(data);
    if (result) {
      return res.status(200).json({
        type: SUCCESS,
        message: "Reviews fetch successfully",
        data: result,
      });
    } else {
      return res.status(400).json({
        type: FAILURE,
        message: "Failed to fetch",
        errors: [],
      });
    }
  } catch (error) {
    next(error);
  }
};
