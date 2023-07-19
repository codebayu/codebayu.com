import { fireEvent, render, screen } from '../../setupTests';
import ReactGA from 'react-ga';
import DownloadCV from '.';

describe('DownloadCV component', () => {
  it('should render the button download', () => {
    render(<DownloadCV />);
    const button = screen.getByText(/Download My CV/i);
    expect(button).toBeInTheDocument();
  });

  it('calls ReactGA.event when the button is clicked', () => {
    render(<DownloadCV />);
    const buttonElement = screen.getByText(/Download My CV/i);
    fireEvent.click(buttonElement);
    expect(ReactGA.event).toHaveBeenCalledTimes(1);
    expect(ReactGA.event).toHaveBeenCalledWith({
      category: 'Download CV',
      action: 'test action',
      label: 'test label',
      value: 'success',
    });
  });

  it('renders without throwing an error', () => {
    expect(() => render(<DownloadCV />)).not.toThrow();
  });
});
