import { Lines } from '.';
import { render, screen } from '../../setupTests';

describe('Lines component', () => {
  
  it('should render Lines', () => {
    render(<Lines />);
    expect(screen.getByTestId('lines')).toBeInTheDocument();
  });

  it('should render svg', () => {
    render(<Lines />);
    expect(screen.getByTestId('svg')).toBeInTheDocument();
  });

  it('renders without throwing an error', () => {
    expect(() => render(<Lines />)).not.toThrow();
  });
});
