import { UseCase } from '../../useCase';
import { SaveConfigResponse } from './response';
import { SaveConfigRequest } from './request';
import { ConfigRepository } from '../../../repositories/configRepository';
import { Config } from '../../../entities/Config';

export class SaveConfigUseCase implements UseCase<SaveConfigRequest, SaveConfigResponse> {
  private _repository;
  constructor({ ConfigRepository }: { ConfigRepository: ConfigRepository }) {
    this._repository = ConfigRepository;
  }

  exec(config: Config) {
    return this._repository.saveConfig(config);
  }
}
