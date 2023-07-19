import CustomSlider from '.';
import { fireEvent, render, screen } from '../../setupTests';

describe('Lines component', () => {
  it('should render slider component', () => {
    render(<CustomSlider />);
    expect(screen.getByTestId('slider')).toBeInTheDocument();
  });

  test('changes slide when dot button is clicked', () => {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    render(<CustomSlider image={images} />);

    const dotButtons = screen.getAllByLabelText('dots');
    expect(dotButtons.length).toBe(images.length);

    fireEvent.click(dotButtons[1]);

    const currentSlide = screen.getByTestId('slide-1');
    expect(currentSlide).toBeInTheDocument();
  });

  it('renders without throwing an error', () => {
    expect(() => render(<CustomSlider />)).not.toThrow();
  });
});
