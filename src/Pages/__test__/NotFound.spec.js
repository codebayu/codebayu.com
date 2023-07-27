import { render, screen } from '../../setupTests';
import { NotFound } from '../NotFound';

describe('Info component', () => {
  it('shoul render not found icon', () => {
    render(<NotFound />);
    const icon = screen.getByTestId('icon');
    expect(icon).toBeInTheDocument();
  });

  it('should render the heading', () => {
    render(<NotFound />);
    const heading = screen.getByText(/Ooups, page not found/i);
    expect(heading).toBeInTheDocument();
  });

  it('should render the description info', () => {
    render(<NotFound />);
    const description = screen.getByTestId('description');
    expect(description).toBeInTheDocument();
  });

  it('shoul render CTA link', () => {
    render(<NotFound />);
    const cta = screen.getByTestId('cta');
    expect(cta).toBeInTheDocument();
  });

  it('renders without throwing an error', () => {
    expect(() => render(<NotFound />)).not.toThrow();
  });
});
