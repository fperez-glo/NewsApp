import { Config } from '../entities/Config';

export interface ConfigRepository {
  getConfig(): Promise<Config>;
  saveConfig(config: Config): Promise<void>;
}
