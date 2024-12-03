import { action, makeObservable, observable, toJS } from 'mobx';
import { GetNewsUseCase } from '../../domain/useCases/news/getNews';
import { GetNewsDetailUseCase } from '../../domain/useCases/news/getNewsById';
import { News } from '../../domain/entities/News';
import { AddToBookmarkUseCase } from '../../domain/useCases/news/addToBookmark';
import { RemoveBookmarkUseCase } from '../../domain/useCases/news/removeBookmark';

interface Props {
  GetNewsUseCase: GetNewsUseCase;
  GetNewsDetailUseCase: GetNewsDetailUseCase;
  AddToBookmarkUseCase: AddToBookmarkUseCase;
  RemoveBookmarkUseCase: RemoveBookmarkUseCase;
}

export class NewsViewModel {
  private _getNewsUseCase;
  private _getNewsDetailUseCase;
  private _addToBookmarkUseCase;
  private _removeBookmarkUseCase;
  public isLoading: boolean = false;
  public isLoadingDetail: boolean = false;
  public news: News[] = [];
  public filteredNews: News[] = [];
  public newsDetail: News = {} as News;

  constructor({ GetNewsUseCase, GetNewsDetailUseCase, AddToBookmarkUseCase, RemoveBookmarkUseCase }: Props) {
    makeObservable(this, {
      isLoading: observable,
      isLoadingDetail: observable,
      news: observable,
      newsDetail: observable,
      filteredNews: observable,
      setNews: action,
      setFilteredNews: action,
      setNewsDetail: action,
      setLoading: action,
      setLoadingDetail: action,
    });
    this._getNewsUseCase = GetNewsUseCase;
    this._getNewsDetailUseCase = GetNewsDetailUseCase;
    this._addToBookmarkUseCase = AddToBookmarkUseCase;
    this._removeBookmarkUseCase = RemoveBookmarkUseCase;
    this.fetchNewsData();
  }

  public async fetchNewsData() {
    this.setLoading(true);
    try {
      const news = await this._getNewsUseCase.exec();
      this.setNews(news);
      this.setFilteredNews(news);
      return news;
    } catch (error) {
      console.warn('@@ERROR_ON_FETCH_NEWS@@', error);
    } finally {
      this.setLoading(false);
    }
  }

  public async searchNews(search: string) {
    if (!search) {
      this.setFilteredNews(this.news);
      return;
    }
    try {
      const filteredNews = this.news.filter((b) => b.title.toLowerCase().includes(search.toLowerCase()));
      this.setFilteredNews(filteredNews);
    } catch (error) {
      console.warn('@@ERROR_SEARCHING_NEWS@@', error);
    }
  }

  public async fetchNewsDetail(newsId: string) {
    this.setLoadingDetail(true);
    try {
      const news = await this._getNewsDetailUseCase.exec(newsId);
      this.setNewsDetail(news);
      return news;
    } catch (error) {
      console.warn('@@ERROR_ON_FETCH_NEWS_DETAIL@@', error);
    } finally {
      this.setLoadingDetail(false);
    }
  }

  public async toggleBookMark(newsId: string) {
    const updatedNews = this.news.find((b) => b.id === newsId);
    if (updatedNews) {
      if (!updatedNews.bookmark) {
        await this._addToBookmarkUseCase.exec(newsId);
      } else {
        await this._removeBookmarkUseCase.exec(newsId);
      }
      updatedNews.bookmark = !updatedNews.bookmark;
      this.setNews(this.news.map((b) => (b.id === newsId ? updatedNews : b)));
      this.setFilteredNews(this.filteredNews.map((b) => (b.id === newsId ? updatedNews : b)));
    }
  }

  public setNews(news: News[]) {
    this.news = news;
  }

  public setFilteredNews(news: News[]) {
    this.filteredNews = news;
  }

  public setNewsDetail(newsDetail: News) {
    this.newsDetail = newsDetail;
  }

  public setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  public setLoadingDetail(isLoading: boolean) {
    this.isLoadingDetail = isLoading;
  }
}
