import { TArticle } from './article.interface';
import { ArticleModel } from './article.model';

// post
const createArticleIntoDb = async (article: TArticle) => {
  const result = await ArticleModel.create(article);
  return result;
};

// get
const getAllArticlesFromDb = async () => {
  const result = await ArticleModel.find();
  return result;
};

export const ArticleServices = {
  createArticleIntoDb,
  getAllArticlesFromDb,
};
