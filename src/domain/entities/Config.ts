interface ConfigParams {
  language: string;
  theme: string;
}

export class Config {
  language: string;
  theme: string;

  constructor(params: ConfigParams) {
    this.language = params.language;
    this.theme = params.theme;
  }
}
