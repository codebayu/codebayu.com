import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { extendTheme, ThemeProvider } from '@chakra-ui/react';
import { Navbar } from '../Navbar';

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => mockedUsedNavigate
}));


describe('Framer Motion component', () => {
  const theme = extendTheme({})
  const setup = () => render(<ThemeProvider theme={theme}><Navbar /></ThemeProvider>);

  it('should render the Home link', () => {
    setup()
    const home = screen.getByText(/Home/i);
    expect(home).toBeInTheDocument()
  });

  it('should render the Experience link', () => {
    setup()
    const experience = screen.getByText(/Experience/i);
    expect(experience).toBeInTheDocument()
  });

  it('should render the My Project link', () => {
    setup()
    const project = screen.getByText(/My Project/i);
    expect(project).toBeInTheDocument()
  });

  it('should render the My Stack link', () => {
    setup()
    const stack = screen.getByText(/My Stack/i);
    expect(stack).toBeInTheDocument()
  });

  it('should render the download cv button', () => {
    setup()
    const button = screen.getByTestId('download-cv');
    expect(button).toBeInTheDocument();
  });

  it('renders without throwing an error', () => {
    expect(() => render(<ThemeProvider theme={theme}><Navbar /></ThemeProvider>)).not.toThrow();
  });
});
