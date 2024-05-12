import { NextFunction, Request, Response } from 'express';
import { ArticleServices } from './article.service';

const createArticle = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const article = req.body;
    const result = await ArticleServices.createArticleIntoDb(article);

    res.status(201).json({
      success: true,
      message: 'Article created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getAllArticles = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await ArticleServices.getAllArticlesFromDb();

    res.status(201).json({
      success: true,
      message: 'Article retrieved successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const ArticleControllers = {
  createArticle,
  getAllArticles,
};
