import { Schema, model } from 'mongoose';
import { TArticle } from './article.interface';

const articleSchema = new Schema<TArticle>({
  image: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  date: { type: String, required: true },
  readTime: { type: String, required: true },
});

export const ArticleModel = model<TArticle>('Article', articleSchema);
