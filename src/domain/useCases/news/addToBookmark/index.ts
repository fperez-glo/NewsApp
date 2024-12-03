import { NewsRepository } from '../../../repositories/newsRepository';
import { UseCase } from '../../useCase';
import { AddToBookmarkResponse } from './response';
import { AddToBookmarkRequest } from './request';

export class AddToBookmarkUseCase implements UseCase<AddToBookmarkRequest, AddToBookmarkResponse> {
  private _repository;
  constructor({ NewsRepository }: { NewsRepository: NewsRepository }) {
    this._repository = NewsRepository;
  }

  exec(id: string) {
    return this._repository.addToBookmark(id);
  }
}
