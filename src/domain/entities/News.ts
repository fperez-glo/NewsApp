export interface NewsParams {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  time: string;
  category: string;
  author: string;
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
  time: string;
  category: string;
  author: string;
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
    this.time = params.time;
    this.category = params.category;
    this.author = params.author;
    this.tags = params.tags;
    this.bookmark = params.bookmark;
  }
}
