import { Appearance } from 'react-native';
import { Config } from '../../domain/entities/Config';
import { ConfigRepository } from '../../domain/repositories/configRepository';
import { LocalStorage } from '../datasource/interface/LocalStorage';
import { ConfigModel } from '../models/ConfigModel';
import { getLocales } from 'expo-localization';

export class ConfigRepositoryImpl implements ConfigRepository {
  private _localStorage: LocalStorage;

  constructor({ LocalStorage }: { LocalStorage: LocalStorage }) {
    this._localStorage = LocalStorage;
  }

  public async getConfig(): Promise<Config> {
    const config = await this._localStorage.getItem('config');
    if (!config) {
      return new ConfigModel({
        language: getLocales()[0].languageCode ?? 'en',
        theme: Appearance.getColorScheme() ?? 'light',
      }).toDomain();
    }
    return new ConfigModel(JSON.parse(config)).toDomain();
  }

  public async saveConfig(config: any): Promise<void> {
    await this._localStorage.setItem('config', config);
  }
}
