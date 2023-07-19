import { render, screen } from '../../../setupTests';
import { Info } from '../Info';

describe('Info component', () => {
  it('should render the heading info', () => {
    render(<Info />);
    const heading = screen.getByText(/How i built this website?/i);
    expect(heading).toBeInTheDocument();
  });

  it('should render the description info', () => {
    render(<Info />);
    const description = screen.getByTestId('info-description');
    expect(description).toBeInTheDocument();
  });

  it('renders without throwing an error', () => {
    expect(() => render(<Info />)).not.toThrow();
  });
});
