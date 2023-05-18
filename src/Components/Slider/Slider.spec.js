import CustomSlider from '.';
import { render, screen } from '../../setupTests';

describe('Lines component', () => {

  it('should render slider component', () => {
    render(<CustomSlider />);
    expect(screen.getByTestId('slider')).toBeInTheDocument();
  });

  it('renders without throwing an error', () => {
    expect(() => render(<CustomSlider />)).not.toThrow();
  });
});
