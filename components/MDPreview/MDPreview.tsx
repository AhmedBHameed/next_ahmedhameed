import React from 'react';
import hydrate from 'next-mdx-remote/hydrate';
import {components} from './components';

export interface Source {
  compiledSource: string;
  renderedOutput: string;
  scope?: Record<string, unknown>;
}

interface MDPreviewProps {
  markdown: Source;
  className?: string;
}

const MDPreview: React.FC<MDPreviewProps> = ({markdown, className}) => {
  const content = hydrate(markdown, {components});

  return <div className={className}>{content}</div>;
};

export {components};
export default MDPreview;
