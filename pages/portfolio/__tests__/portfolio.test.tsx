import {ThemeProvider} from '@emotion/react';
import {render, waitFor} from '@testing-library/react';

import {lightThemeColors} from '../../../styles/Theme';
import Portfolio from '../index';

// Mock aside component since we it is tested separately.
jest.mock(
  '../../../components/AsideBar/AhmedhammedNavigation/AhmedhammedNavigation',
  () => () => <></>
);

function renderComponent() {
  return render(
    <ThemeProvider theme={lightThemeColors}>
      <Portfolio />
    </ThemeProvider>
  );
}

describe('Portfolio', () => {
  it('matches snapshot ', async () => {
    const {container} = renderComponent();
    await waitFor(() => {});

    expect(container).toMatchSnapshot();
  });
});
