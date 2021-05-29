import {useRouter} from 'next/router';

import ar from '../../../i18n/ar.json';
import en from '../../../i18n/en.json';

const isInTest = process.env.NODE_ENV === 'test';

function translate(localeObject, path: string) {
  const originalPath = path;
  path = path.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
  path = path.replace(/^\./, ''); // strip a leading dot
  const arrayOfPath = path.split('.');
  for (let i = 0, n = arrayOfPath.length; i < n; i += 1) {
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
    case 'en':
      return {t: (path: string) => translate(en, path)};
    default:
      // If no no locale found, return locale key chain as origin i18n library.
      return {
        t: (path: string) => {
          if (!isInTest) {
            // eslint-disable-next-line no-console
            console.log(`Missing locale key value of ${path}`);
          }
          return path;
        },
      };
  }
};

export {useTranslation};
