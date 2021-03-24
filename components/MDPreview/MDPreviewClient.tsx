import Markdown from 'markdown-to-jsx';
import React from 'react';

import {components} from './components';

const {Audio, code, h1, h2, pre} = components;

interface MDPreviewClientProps {
  markdown: string;
}

const MDPreviewClient: React.FC<MDPreviewClientProps> = ({markdown}) => {
  console.log('🚀 ~ file: MDPreviewClient.tsx ~ line 13 ~ markdown', markdown);
  return (
    <Markdown
      children={markdown}
      options={{
        overrides: {
          Audio: {
            component: Audio,
          },
          h1: {
            component: h1,
          },
          h2: {
            component: h2,
          },
          pre: {
            component: pre,
          },
          code: {
            component: code,
          },
        },
      }}
    />
  );
};

export default MDPreviewClient;
