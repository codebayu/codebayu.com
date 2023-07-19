import { fireEvent, render, screen } from '../../setupTests';
import { Navbar } from '.';

describe('Framer Motion component', () => {
  const props = {
    featureDarkModeValue: true,
    featureDownloadCvValue: true,
  };

  it('should render the Home link', () => {
    render(<Navbar {...props} />);
    const home = screen.getByText(/Home/i);
    expect(home).toBeInTheDocument();
  });

  it('should render the Experience link', () => {
    render(<Navbar {...props} />);
    const experience = screen.getByText(/Experience/i);
    expect(experience).toBeInTheDocument();
  });

  it('should render the Projects link', () => {
    render(<Navbar {...props} />);
    const project = screen.getByText(/Projects/i);
    expect(project).toBeInTheDocument();
  });

  it('should render the Tech Stack link', () => {
    render(<Navbar {...props} />);
    const stack = screen.getByText(/Tech Stack/i);
    expect(stack).toBeInTheDocument();
  });

  it('should render the download cv button', () => {
    render(<Navbar {...props} />);
    const button = screen.getByTestId('download-cv');
    expect(button).toBeInTheDocument();
  });

  it('should render the toggle mode button', () => {
    render(<Navbar {...props} />);
    const toggle = screen.getByTestId('toggle-mode');
    expect(toggle).toBeInTheDocument();
  });

  it('renders without throwing an error', () => {
    expect(() => render(<Navbar />)).not.toThrow();
  });
});
