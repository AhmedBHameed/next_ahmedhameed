import dynamic from 'next/dynamic';

export const MarkdownViewer = dynamic(() => import('./MarkdownViewerComponent'), {ssr: false});
