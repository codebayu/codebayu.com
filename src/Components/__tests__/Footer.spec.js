import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import {Footer} from '../Footer';
import { extendTheme, ThemeProvider } from '@chakra-ui/react';

describe('Footer component', () => {
  const theme = extendTheme({})
  const setup = () => render(<ThemeProvider theme={theme}><Footer /></ThemeProvider>);

  it('should render the framer motion', () => {
    setup()
    const framer = screen.getByTestId('framer-motion');
    expect(framer).toBeInTheDocument();
  });

  it('should render the footer text', () => {
    setup()
    const text = screen.getByText(/CopyRight © 2022 Bayu Setiawan All Rights Reserved/i);
    expect(text).toBeInTheDocument();
  });

  it('renders without throwing an error', () => {
    expect(() => render(<ThemeProvider theme={theme}><Footer /></ThemeProvider>)).not.toThrow();
  });
});
