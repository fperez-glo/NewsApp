import { News } from '../../domain/entities/News';
import { NewsRepository } from '../../domain/repositories/newsRepository';
import { HttpManager } from '../datasource/interface/HttpManager';
import { LocalStorage } from '../datasource/interface/LocalStorage';
import { NewsModel } from '../models/NewsModel';
import { NEWS_DATA } from '../NEWS';

export class NewsRepositoryImpl implements NewsRepository {
  private _http: HttpManager;
  private localStorage: LocalStorage;

  constructor({ HttpManager, LocalStorage }: { HttpManager: HttpManager; LocalStorage: LocalStorage }) {
    this._http = HttpManager; //TODO: To make http request to the api
    this.localStorage = LocalStorage;
  }

  public async getNews(): Promise<News[]> {
    const bookmarks = await this.localStorage.getItem('bookmarks');
    const newsPromise = new Promise<News[]>((res, reject) => {
      setTimeout(() => {
        res(
          NEWS_DATA.map(NewsModel.fromRawJson).map((b) => {
            const bookmarksArr = bookmarks?.split(',');
            if (bookmarksArr?.length) {
              b.bookmark = bookmarksArr?.includes(b.id);
            }
            return b.toDomain();
          }),
        );
      }, 500);
    });
    return newsPromise;
  }

  public getNewsByTopic(topicId: string): Promise<News[]> {
    const newsPromise = new Promise<News[]>((res, reject) => {
      setTimeout(() => {
        const news = NEWS_DATA.map(NewsModel.fromRawJson)
          .map((b) => b.toDomain())
          .filter((b) => b.tags.find((tag) => tag.id == topicId));
        if (news) {
          res(news);
        } else {
          reject(new Error(`News with topicId ${topicId} not found`));
        }
      }, 500);
    });
    return newsPromise;
  }

  public async getNewsById(newsId: string): Promise<News> {
    const bookmarks = await this.localStorage.getItem('bookmarks');
    const newsPromise = new Promise<News>((res, reject) => {
      setTimeout(() => {
        const news = NEWS_DATA.map(NewsModel.fromRawJson)
          .map((b) => b.toDomain())
          .find((b) => b.id == newsId);
        if (news) {
          const bookmarksArr = bookmarks?.split(',');
          if (bookmarksArr?.length) {
            news.bookmark = bookmarksArr?.includes(news.id);
          }
          res(news);
        } else {
          reject(new Error(`News with id ${newsId} not found`));
        }
      }, 200);
    });

    return newsPromise;
  }

  public async addToBookmark(id: string) {
    await this.localStorage.addTo('bookmarks', id);
  }

  public async removeBookmark(id: string) {
    await this.localStorage.removeFrom('bookmarks', id);
  }
}
