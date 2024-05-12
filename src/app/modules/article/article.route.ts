import express from 'express';
import { ArticleControllers } from './article.controller';

const router = express.Router();

router.post('/create-article', ArticleControllers.createArticle);

router.get('/', ArticleControllers.getAllArticles);

export const ArticleRoutes = router;
