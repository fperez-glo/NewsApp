import { action, makeObservable, observable } from 'mobx';
import { GetConfigUseCase } from '../../domain/useCases/config/getConfigUseCase';

export class Translation {
  static enUS = 'en';
  static esES = 'es';
  currentLang: string = Translation.defaultLanguage;
  private _getConfigUseCase;

  constructor({ GetConfigUseCase }: { GetConfigUseCase: GetConfigUseCase }) {
    makeObservable(this, {
      currentLang: observable,
      setCurrentLang: action,
    });
    this._getConfigUseCase = GetConfigUseCase;
    this.currentLang = Translation.defaultLanguage;
    this.getCurrentLangConfig();
  }

  public static get defaultLanguage() {
    return Translation.enUS;
  }

  public static get supported() {
    return [Translation.enUS, Translation.esES];
  }

  public async getCurrentLangConfig() {
    const config = await this._getConfigUseCase.exec();
    this.setCurrentLang(config.language);
  }

  public static transformToSupported(language: string | null) {
    if (!language) return Translation.defaultLanguage;
    if (Translation.supported.includes(language)) {
      return language;
    } else {
      return Translation.defaultLanguage;
    }
  }

  setCurrentLang = (lang: string) => {
    this.currentLang = Translation.transformToSupported(lang);
  };
}
