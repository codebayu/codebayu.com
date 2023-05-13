import { render, screen } from '../../setupTests';
import {Footer} from '.';

describe('Footer component', () => {

  it('should render the framer motion', () => {
    render(<Footer />)
    const framer = screen.getByTestId('framer-motion');
    expect(framer).toBeInTheDocument();
  });

  it('should render the footer text', () => {
    render(<Footer />)
    const text = screen.getByText(/CopyRight © 2022 Bayu Setiawan All Rights Reserved/i);
    expect(text).toBeInTheDocument();
  });

  it('renders without throwing an error', () => {
    expect(() => render(<Footer />)).not.toThrow();
  });
});
