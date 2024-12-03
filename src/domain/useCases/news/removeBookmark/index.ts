import { NewsRepository } from '../../../repositories/newsRepository';
import { UseCase } from '../../useCase';
import { RemoveBookmarkResponse } from './response';
import { RemoveBookmarkRequest } from './request';

export class RemoveBookmarkUseCase implements UseCase<RemoveBookmarkRequest, RemoveBookmarkResponse> {
  private _repository;
  constructor({ NewsRepository }: { NewsRepository: NewsRepository }) {
    this._repository = NewsRepository;
  }

  exec(id: string) {
    return this._repository.removeBookmark(id);
  }
}
