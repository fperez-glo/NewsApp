import { action, makeObservable, observable } from 'mobx';
import { Config } from '../../domain/entities/Config';
import { GetConfigUseCase } from '../../domain/useCases/config/getConfigUseCase';
import { SaveConfigUseCase } from '../../domain/useCases/config/saveConfigUseCase';

interface Props {
  GetConfigUseCase: GetConfigUseCase;
  SaveConfigUseCase: SaveConfigUseCase;
}

export class ConfigViewModel {
  private _getConfigUseCase;
  private _saveConfigUseCase;
  public config: Config = {} as Config;

  constructor({ GetConfigUseCase, SaveConfigUseCase }: Props) {
    makeObservable(this, {
      config: observable,
      setConfig: action,
    });
    this._getConfigUseCase = GetConfigUseCase;
    this._saveConfigUseCase = SaveConfigUseCase;
    this.fetchConfigData();
  }

  public async fetchConfigData() {
    try {
      const config = await this._getConfigUseCase.exec();
      this.setConfig(config);
      return config;
    } catch (error) {
      //   console.warn('@@ERROR_ON_FETCHING_CONFIG@@', error);
    }
  }

  public async saveConfig(config: Config) {
    try {
      await this._saveConfigUseCase.exec(config);
      this.setConfig(config);
      return config;
    } catch (error) {
      //   console.warn('@@ERROR_ON_SAVING_CONFIG@@', error);
    }
  }

  setConfig(config: Config) {
    this.config = config;
  }
}
