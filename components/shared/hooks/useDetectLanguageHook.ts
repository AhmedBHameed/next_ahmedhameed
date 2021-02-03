import {useRouter} from 'next/router';
import {useEffect} from 'react';

export const useDetectLanguage = () => {
  const {locale} = useRouter();

  useEffect(() => {
    const nextRoot = document.getElementById('__next');
    if (locale === 'ar') {
      nextRoot.dir = 'rtl';
    } else {
      nextRoot.dir = 'ltr';
    }
  }, [locale]);

  return {
    dir: (locale === 'ar' ? 'rtl' : 'ltr') as 'rtl' | 'ltr',
  };
};
