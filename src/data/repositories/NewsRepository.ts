import { News } from '../../domain/entities/News';
import { NewsRepository } from '../../domain/repositories/newsRepository';
import { Endpoint } from '../datasource/endpoint';
import { HttpManager } from '../datasource/interface/HttpManager';
import { LocalStorage } from '../datasource/interface/LocalStorage';
import { NewsModel } from '../models/NewsModel';
import { UserModel } from '../models/UserModel';
import { NEWS_DATA } from '../NEWS';

export class NewsRepositoryImpl implements NewsRepository {
  private _http: HttpManager;
  private localStorage: LocalStorage;

  constructor({ HttpManager, LocalStorage }: { HttpManager: HttpManager; LocalStorage: LocalStorage }) {
    this._http = HttpManager;
    this.localStorage = LocalStorage;
  }

  public async getNews(): Promise<News[]> {
    const bookmarks = await this.localStorage.getItem('bookmarks');
    const newsResponse = await this._http.get(Endpoint.NEWS);
    const news = newsResponse.data.map(NewsModel.fromRawJson) as NewsModel[];

    // To fetch posts user data
    const usersResponse = await this._http.get(Endpoint.USERS);
    const users = usersResponse.data.map(UserModel.fromRawJson) as UserModel[];

    return news.map((b) => {
      const bookmarksArr = bookmarks?.split(',') || [];
      if (bookmarksArr.length) {
        b.bookmark = bookmarksArr.includes(b.id);
      }
      const user = users.find((u) => u.id === b.authorId);
      if (user) {
        b.author = user;
      }
      return b.toDomain();
    });
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
    const newsResponse = await this._http.get(Endpoint.NEWS);
    const newsModels = newsResponse.data.map(NewsModel.fromRawJson) as NewsModel[];
    const newDetail = newsModels.find((b) => b.id === newsId);

    if (!newDetail) {
      throw new Error(`News with id ${newsId} not found`);
    }

    // To fetch posts user data
    const usersResponse = await this._http.get(Endpoint.USERS);
    const users = usersResponse.data.map(UserModel.fromRawJson) as UserModel[];
    const user = users.find((b) => b.id === newDetail.authorId);
    if (!user) {
      console.warn(`User with id ${newDetail.authorId} not found`);
    } else {
      newDetail.author = user;
    }

    const bookmarksArr = bookmarks?.split(',') || [];
    if (bookmarksArr.length) {
      newDetail.bookmark = bookmarksArr.includes(newDetail.id);
    }
    return newDetail.toDomain();
  }

  public async addToBookmark(id: string) {
    await this.localStorage.addTo('bookmarks', id);
  }

  public async removeBookmark(id: string) {
    await this.localStorage.removeFrom('bookmarks', id);
  }
}
