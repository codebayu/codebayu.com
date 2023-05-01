import { fireEvent, render, screen } from '../../setupTests';
import ReactGA from 'react-ga';
import DownloadCV from '../DownloadCV';

describe('DownloadCV component', () => {

  it('should render the button download', () => {
    render(<DownloadCV />)
    const button = screen.getByRole('button');
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

  // it('navigates to the correct URL when the button is clicked', () => {
  //   const navigateMock = jest.fn();
  //   useNavigate.mockReturnValue(navigateMock);
  //   render(<DownloadCV />);
  //   const buttonElement = screen.getByText(/Download My CV/i);
  //   fireEvent.click(buttonElement);
  //   expect(navigateMock).toHaveBeenCalledTimes(1);
  //   expect(navigateMock).toHaveBeenCalledWith('./Bayu-Setiawan-Frontend-Developer.pdf');
  // });

  it('renders without throwing an error', () => {
    expect(() => render(<DownloadCV />)).not.toThrow();
  });
});
