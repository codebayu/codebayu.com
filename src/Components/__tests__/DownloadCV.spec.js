import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DownloadCV from '../DownloadCV';
import { ThemeProvider, extendTheme } from '@chakra-ui/react';

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => mockedUsedNavigate
}));

describe('DownloadCV component', () => {
  const theme = extendTheme({})
  const setup = () => render(<ThemeProvider theme={theme}><DownloadCV /></ThemeProvider>);

  it('should render the button download', () => {
    setup()
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('renders without throwing an error', () => {
    expect(() => render(<ThemeProvider theme={theme}><DownloadCV /></ThemeProvider>)).not.toThrow();
  });
});
