import hydrate from 'next-mdx-remote/hydrate';
import React from 'react';

import {components} from './components';

export interface Source {
  compiledSource: string;
  renderedOutput: string;
  scope?: Record<string, unknown>;
}

interface MDPreviewProps {
  markdown: Source;
}

const MDPreview: React.FC<MDPreviewProps> = ({markdown}) => {
  const content = hydrate(markdown, {components});

  return <>{content}</>;
};

export {components};
export default MDPreview;
