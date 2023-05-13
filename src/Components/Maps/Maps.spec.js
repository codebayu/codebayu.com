import { render, screen } from '../../setupTests';
import { Maps } from '.';

describe('Maps component', () => {
  
  it('should render iframe maps', () => {
    render(<Maps />)
    expect(screen.getByTestId('maps')).toBeInTheDocument()
  });
  
  it('renders without throwing an error', () => {
    expect(() => render(<Maps />)).not.toThrow();
  });
});
