import { render, screen } from './setupTests';
import App from './App';
import { Navbar } from './Components/Navbar';
import Banner from './Components/Banner';
import { Footer } from './Components/Footer';
import { ProjectSection } from './Pages/Project';
import { Stacks } from './Pages/Stack';
import { Experience } from './Pages/Experience';

describe('App component', () => {
  it('should render Navbar', () => {
    render(<Navbar />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('should render Banner', () => {
    render(<Banner />);
    expect(screen.getByTestId('banner')).toBeInTheDocument();
  });

  it('should render Experience section', () => {
    render(<Experience />);
    expect(screen.getByTestId('experience-section')).toBeInTheDocument();
  });

  it('should render Stacks', () => {
    render(<Stacks />);
    expect(screen.getByTestId('stacks')).toBeInTheDocument();
  });

  it('should render Footer', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('should render Projects', () => {
    render(<ProjectSection />);
    expect(screen.getByTestId('project-section')).toBeInTheDocument();
  });

  it('renders without throwing an error', () => {
    expect(() => render(<App />)).not.toThrow();
  });
});
