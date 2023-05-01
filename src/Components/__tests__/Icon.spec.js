import { fireEvent, render, screen } from "../../setupTests";
import ReactGA from 'react-ga';
import { Icon } from "../Icon";

describe("Icon component", () => {

  const props = {
    link: "https://example.com",
    icon: "email",
    label: "Email"
  };

  it('calls ReactGA.event when the button is clicked', () => {
    render(<Icon />);
    const icon = screen.getByTestId('icon');
    fireEvent.click(icon);
    expect(ReactGA.event).toHaveBeenCalledTimes(1);
  });
  
  it('renders without throwing an error', () => {
    expect(() => render(<Icon {...props}/>)).not.toThrow();
  });
  
});
