import {ThemeProvider} from '@emotion/react';
import {render} from '@testing-library/react';
import {theme} from '../../styles/Theme';

// import styled from 'styled-components'
// import renderer from 'react-test-renderer'

import Brand from './Brand';

function renderComponent() {
  return render(
    <ThemeProvider theme={theme}>
      <Brand />
    </ThemeProvider>
  );
}

describe('Brand', () => {
  it('matches snapshot', () => {
    const {container} = renderComponent();

    expect(container).toMatchSnapshot();
  });
});
