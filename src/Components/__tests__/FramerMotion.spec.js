import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { extendTheme, ThemeProvider } from '@chakra-ui/react';
import FramerMotion from '../FramerMotion';

describe('Framer Motion component', () => {
  const theme = extendTheme({})

  it('renders without throwing an error', () => {
    expect(() => render(<ThemeProvider theme={theme}><FramerMotion /></ThemeProvider>)).not.toThrow();
  });
});
