import dynamic from 'next/dynamic';

export const MarkdownEditor = dynamic(() => import('./MarkdownEditorComponent'), {ssr: false});
