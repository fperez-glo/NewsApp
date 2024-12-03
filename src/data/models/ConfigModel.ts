import { Config } from '../../domain/entities/Config';

interface ConstructorParams {
  language: string;
  theme: string;
}

export class ConfigModel {
  language: string;
  theme: string;

  constructor(params: ConstructorParams) {
    this.language = params.language;
    this.theme = params.theme;
  }

  static fromRawJson = (rawJson: any): ConfigModel => {
    const { language, theme } = rawJson;
    return new ConfigModel({ language, theme });
  };
}

declare module './ConfigModel' {
  interface ConfigModel {
    toDomain(): Config;
  }
}

ConfigModel.prototype.toDomain = function (): Config {
  const data = this;
  return new Config(data);
};
