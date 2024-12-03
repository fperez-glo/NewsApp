import { News } from '../entities/News';

export interface NewsRepository {
  getNews(): Promise<News[]>;
  getNewsById(id: string): Promise<News>;
  getNewsByTopic(topicId: string): Promise<News[]>;
  addToBookmark(id: string): Promise<void>;
  removeBookmark(id: string): Promise<void>;
}
