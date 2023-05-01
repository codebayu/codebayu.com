import '@testing-library/jest-dom'
import { ThemeProvider, extendTheme } from '@chakra-ui/react';
import { render } from '@testing-library/react';

const theme = extendTheme({})

window.open = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => jest.fn()
}));

jest.mock('react-ga', () => ({
    event: jest.fn(),
  }));

  window.matchMedia = window.matchMedia || function() {
    return {
    matches : false,
    addListener : function() {},
    removeListener: function() {}
    };
    };

const Providers = ({ children }) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui, options) => {
    return render(ui, { wrapper: Providers, ...options });
};

export * from '@testing-library/react';

export { customRender as render };