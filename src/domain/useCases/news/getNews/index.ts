import { NewsRepository } from '../../../repositories/newsRepository';
import { UseCase } from '../../useCase';
import { GetNewsResponse } from './response';
import { GetNewsRequest } from './request';

export class GetNewsUseCase implements UseCase<GetNewsRequest, GetNewsResponse> {
  private _repository;
  constructor({ NewsRepository }: { NewsRepository: NewsRepository }) {
    this._repository = NewsRepository;
  }

  exec() {
    return this._repository.getNews();
  }
}
