import dynamic from 'next/dynamic';

export const GithubMdEditor = dynamic(() => import('./GithubMdEditorComponent'), {ssr: false});
