import { Translation } from './translation';
import { useContainerInjection } from '../hooks/useContainerInjection';
import { observer } from 'mobx-react-lite';
import { useLayoutEffect } from 'react';
import { changeLanguage } from 'i18next';

const TranslationListener = () => {
  const translationStore = useContainerInjection<Translation>('Translation');
  useLayoutEffect(() => {
    if (!translationStore.currentLang) return;
    changeLanguage(translationStore.currentLang);
  }, [translationStore.currentLang]);

  return null;
};

export default observer(TranslationListener);
