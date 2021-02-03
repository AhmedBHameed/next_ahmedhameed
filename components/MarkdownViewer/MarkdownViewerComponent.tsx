import ReactMarkdown from 'react-markdown';
import remarkGtm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';

const renderers = {
  code: ({language, value}) => {
    console.log('🚀 ~ file: MarkdownEditorComponent.tsx ~ line 8 ~ language', language);
    return <SyntaxHighlighter style={dark} language={language} children={value} />;
  },
};

interface MarkdownEditorProps {
  className?: string;
  markdown: string;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({markdown, className}) => {
  return <ReactMarkdown plugins={[remarkGtm]} className={className} renderers={renderers} children={markdown} />;
};

export default MarkdownEditor;
