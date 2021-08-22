import Head from 'next/head';
import React, {useRef} from 'react';
import {useSwitcherTheme} from '../ThemeSwitcher/ThemeSwitcherContext';
import usePrismjs from './hooks/prismjsHook';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'; /* add plugin css */

interface PrismjsProviderProps {
  html: string;
  className?: string;
}

const PrismjsProvider: React.FC<PrismjsProviderProps> = ({html, className}) => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const {darkTheme} = useSwitcherTheme();

  usePrismjs(bodyRef, ['line-numbers'], darkTheme);

  return (
    <>
      <Head>
        {darkTheme && (
          <link href="/styles/prism-okaidia.css" rel="stylesheet" />
        )}

        {!darkTheme && <link href="/styles/prism.css" rel="stylesheet" />}
      </Head>
      <div
        className={className}
        dangerouslySetInnerHTML={{__html: html}}
        ref={bodyRef}
      />
    </>
  );
};

export default PrismjsProvider;
