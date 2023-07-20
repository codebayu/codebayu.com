import { render, screen } from '../../setupTests';
import { ProjectSection } from '../Project';

describe('Banner component', () => {
  it('should render the heading', () => {
    render(<ProjectSection />);
    const heading = screen.getByText(/Projects/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders without throwing an error', () => {
    expect(() => render(<ProjectSection />)).not.toThrow();
  });
});
