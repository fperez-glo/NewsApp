import { News } from '../../domain/entities/News';

interface ConstructorParams {
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

export class NewsModel {
  public id: string;
  public title: string;
  public excerpt: string;
  public content: string;
  public imageUrl: string;
  public time: string;
  public category: string;
  public author: string;
  public tags: {
    id: string;
    title: string;
  }[];
  public bookmark: boolean;

  constructor(params: ConstructorParams) {
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

  static fromRawJson = (rawJson: any): NewsModel => {
    return new NewsModel(rawJson);
  };
}

declare module './NewsModel' {
  interface NewsModel {
    toDomain(): News;
  }
}

NewsModel.prototype.toDomain = function (): News {
  const data = this;
  return new News(data);
};
