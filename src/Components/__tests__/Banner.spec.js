import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Banner from '../Banner';
import { ThemeProvider, extendTheme } from '@chakra-ui/react';

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => mockedUsedNavigate
}));

describe('Banner component', () => {
  const theme = extendTheme({})
  const setup = () => render(<ThemeProvider theme={theme}><Banner /></ThemeProvider>);
  
  it('should render the heading', () => {
    setup()
    const heading = screen.getByText(/Hi! I am,/i);
    expect(heading).toBeInTheDocument();
  });

  it('should render the name', () => {
    setup()
    const name = screen.getByText(/Bayu Setiawan/i);
    expect(name).toBeInTheDocument()
  });

  it('should render the description', () => {
    setup()
    const description = screen.getByText(/I am a highly skilled/i);
    expect(description).toBeInTheDocument();
  });

  it('renders without throwing an error', () => {
    expect(() => render(<ThemeProvider theme={theme}><Banner /></ThemeProvider>)).not.toThrow();
  });
});
