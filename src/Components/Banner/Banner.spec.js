import { render, screen } from '../../setupTests';
import Banner from '.';

describe('Banner component', () => {
  it('should render the heading', () => {
    render(<Banner />);
    const heading = screen.getByText(/Hi! I am,/i);
    expect(heading).toBeInTheDocument();
  });

  it('should render the name', () => {
    render(<Banner />);
    const name = screen.getByText(/Bayu Setiawan/i);
    expect(name).toBeInTheDocument();
  });

  it('should render the description', () => {
    render(<Banner />);
    const description = screen.getByText(/As a frontend developer,/i);
    expect(description).toBeInTheDocument();
  });

  it('renders without throwing an error', () => {
    expect(() => render(<Banner />)).not.toThrow();
  });
});
