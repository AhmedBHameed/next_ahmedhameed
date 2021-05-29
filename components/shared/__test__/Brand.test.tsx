import {ThemeProvider} from '@emotion/react';
import {render} from '@testing-library/react';
import {lightThemeColors} from '../../../styles/Theme';

import Brand from '../Brand';

function renderComponent() {
  return render(
    <ThemeProvider theme={lightThemeColors}>
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
