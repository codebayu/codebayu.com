import { render } from "@testing-library/react";
import { Icon } from "../Icon";
import { BrowserRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom")),
  useNavigate: () => mockedUsedNavigate
}));

describe("Icon component", () => {
  const props = {
    link: "https://example.com",
    icon: "email",
    label: "Email"
  };
  it('renders without throwing an error', () => {
    expect(() => render(<BrowserRouter><Icon {...props}/></BrowserRouter>)).not.toThrow();
  });
  
});
