import Highlight, {defaultProps, Language} from 'prism-react-renderer';
import React from 'react';
import styled from '@emotion/styled';

const LineNumber = styled.span({
  display: 'inline-block',
  paddingLeft: '1em',
  paddingRight: '1em',
  userSelect: 'none',
  opacity: 0.6,
  textAlign: 'center',
  position: 'relative',
});

interface CodeblockProps {
  className?: string;
  children: string;
}

const Codeblock: React.FC<CodeblockProps> = ({children, className}) => {
  if (!className) return <>{children}</>;

  const language = className.replace(/language-/, '') as Language;

  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre dir="ltr" className={className} style={{...style, padding: '10px 0'}}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({line, key: i})}>
              <LineNumber className="line-number-style">{i + 1}</LineNumber>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Codeblock;
