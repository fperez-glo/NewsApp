import { User } from './User';

export interface NewsParams {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  readTime: string;
  category: string;
  authorId: string;
  author: User;
  tags: {
    id: string;
    title: string;
  }[];
  bookmark: boolean;
}

export class News {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  readTime: string;
  category: string;
  authorId: string;
  author: User;
  tags: {
    id: string;
    title: string;
  }[];
  bookmark: boolean = false;

  constructor(params: NewsParams) {
    this.id = params.id;
    this.title = params.title;
    this.excerpt = params.excerpt;
    this.content = params.content;
    this.imageUrl = params.imageUrl;
    this.readTime = params.readTime;
    this.category = params.category;
    this.authorId = params.authorId;
    this.author = params.author;
    this.tags = params.tags;
    this.bookmark = params.bookmark;
  }
}
