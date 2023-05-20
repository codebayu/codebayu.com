import { Popup } from '.';
import { render, screen } from '../../setupTests';

describe('Maps component', () => {
  
  it('should render popup component', () => {
    render(<Popup />)
    expect(screen.getByTestId('popup')).toBeInTheDocument()
    expect(screen.getByTestId('avatar')).toBeInTheDocument()
    expect(screen.getByTestId('message')).toBeInTheDocument()
  });
  
  it('renders without throwing an error', () => {
    expect(() => render(<Popup />)).not.toThrow();
  });
});
