import { fireEvent, render, screen } from '../../setupTests';
import DownloadCV from '.';

describe('DownloadCV component', () => {
  it('should render the button download', () => {
    render(<DownloadCV />);
    const button = screen.getByText(/Download Resume/i);
    expect(button).toBeInTheDocument();
  });

  it('renders without throwing an error', () => {
    expect(() => render(<DownloadCV />)).not.toThrow();
  });
});
