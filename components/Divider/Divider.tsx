import styled from '@emotion/styled';
import React from 'react';

const HorizontalLine = styled.hr((props) => {
  const {bgPrimary} = props.theme.colors;
  return {
    margin: '2rem',
    lineHeight: '1em',
    position: 'relative',
    outline: 0,
    border: 0,
    color: 'black',
    textAlign: 'center',
    height: '1.5em',
    opacity: 0.5,
    '&:before': {
      content: `""`,
      background:
        'linear-gradient(to right, transparent, #818078, transparent)',
      position: 'absolute',
      left: 0,
      top: '50%',
      width: '100%',
      height: '1px',
    },
    '&:after': {
      content: 'attr(data-content)',
      position: 'relative',
      display: 'inline-block',
      padding: '0 0.5em',
      lineHeight: '1.5em',
      color: '#818078',
      backgroundColor: bgPrimary,
    },
  };
});

interface DividerProps {
  label: string | number;
  isDarkTheme?: boolean;
}

const Divider: React.FC<DividerProps> = ({label}) => (
  <HorizontalLine data-content={label} />
);

export default Divider;
