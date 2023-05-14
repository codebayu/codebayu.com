import { render, screen } from './setupTests';
import App from './App';
import { Navbar } from './Components/Navbar';
import Banner from './Components/Banner';
import Experience from './Components/Section/Experience';
import Stacks from './Components/Section/Stack';
import { Footer } from './Components/Footer';
import { Lines } from './Components/Lines';

describe('App component', () => {
  
  it('should render Navbar', () => {
    render(<Navbar />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  });
  
  it('should render Banner', () => {
    render(<Banner />)
    expect(screen.getByTestId('banner')).toBeInTheDocument()
  });

  it('should render Experience section', () => {
    render(<Experience />)
    expect(screen.getByTestId('experience-section')).toBeInTheDocument()
  });

  it('should render Stacks', () => {
    render(<Stacks />)
    expect(screen.getByTestId('stacks')).toBeInTheDocument()
  });

  it('should render Footer', () => {
    render(<Footer />)
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  });

  it('should render Lines', () => {
    render(<Lines />)
    expect(screen.getByTestId('lines')).toBeInTheDocument()
  });

  it('renders without throwing an error', () => {
    expect(() => render(<App />)).not.toThrow();
  });
});
