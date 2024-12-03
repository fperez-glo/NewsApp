import { UseCase } from '../../useCase';
import { GetConfigResponse } from './response';
import { GetConfigRequest } from './request';
import { ConfigRepository } from '../../../repositories/configRepository';

export class GetConfigUseCase implements UseCase<GetConfigRequest, GetConfigResponse> {
  private _repository;
  constructor({ ConfigRepository }: { ConfigRepository: ConfigRepository }) {
    this._repository = ConfigRepository;
  }

  exec() {
    return this._repository.getConfig();
  }
}
