import { News } from '../../domain/entities/News';
import { UserModel } from './UserModel';

interface ConstructorParams_OLD {
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

export interface ConstructorParams {
  id: string;
  slug: string;
  url: string;
  title: string;
  content: string;
  image: string;
  thumbnail: string;
  status: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  userId: string;
  author: UserModel;
}

export class NewsModel {
  public id: string;
  public title: string;
  public excerpt: string;
  public content: string;
  public imageUrl: string;
  public readTime: string;
  public category: string;
  public authorId: string;
  public author: UserModel;
  public tags: {
    id: string;
    title: string;
  }[];
  public bookmark: boolean;

  constructor(params: ConstructorParams) {
    this.id = params.id;
    this.title = params.title;
    this.excerpt = params.content.split('.')[0];
    this.content = params.content;
    this.imageUrl = params.image;
    this.readTime = `${Math.ceil(params.content.length / 200).toString()}h`;
    this.category = params.category;
    this.authorId = params.userId;
    this.author = params.author;
    this.tags = [{ id: '1', title: params.slug }];
    this.bookmark = false;
  }

  static fromRawJson = (rawJson: any): NewsModel => {
    return new NewsModel({ ...rawJson, id: String(rawJson.id) });
  };
}

declare module './NewsModel' {
  interface NewsModel {
    toDomain(): News;
  }
}

NewsModel.prototype.toDomain = function (): News {
  const data = this;
  return new News({ ...data, author: data.author?.toDomain() });
};
