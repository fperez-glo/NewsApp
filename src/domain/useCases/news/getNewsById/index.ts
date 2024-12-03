import { NewsRepository } from '../../../repositories/newsRepository';
import { UseCase } from '../../useCase';
import { GetNewsDetailResponse } from './response';
import { GetNewsDetailRequest } from './request';

export class GetNewsDetailUseCase implements UseCase<GetNewsDetailRequest, GetNewsDetailResponse> {
  private _repository;
  constructor({ NewsRepository }: { NewsRepository: NewsRepository }) {
    this._repository = NewsRepository;
  }

  exec(id: string) {
    return this._repository.getNewsById(id);
  }
}
