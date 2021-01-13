import {useRouter} from 'next/router';

import ar from '../../../locales/ar.json';
import en from '../../../locales/en.json';

function translate(localeObject, path: string) {
  const originalPath = path;
  path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  path = path.replace(/^\./, ''); // strip a leading dot
  const arrayOfPath = path.split('.');
  for (let i = 0, n = arrayOfPath.length; i < n; ++i) {
    const key = arrayOfPath[i];
    if (key in localeObject) {
      localeObject = localeObject[key];
    } else {
      return originalPath;
    }
  }
  return localeObject;
}

const useTranslation = () => {
  const {locale} = useRouter();

  switch (locale) {
    case 'ar':
      return {t: (path: string) => translate(ar, path)};
    default:
      return {t: (path: string) => translate(en, path)};
  }
};

export {useTranslation};
