import { render, screen } from '../../../setupTests';
import Stacks from '../Stack';
import stack from '../../../Service/stack.json';

jest.mock('../../../Service/stack.json', () => [
  {
    logo: './stack/logo512.png',
    label: 'React Js',
    labelColor: '#61dafb',
  },
]);

describe('Banner component', () => {
  it('should render the heading', () => {
    render(<Stacks />);
    const heading = screen.getByText(/Tech Stack/i);
    expect(heading).toBeInTheDocument();
  });

  it('should render correct experience information', () => {
    render(<Stacks />);
    stack.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
      
      const img = screen.getByRole('img');
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', item.logo);
    });
  });

  it('renders without throwing an error', () => {
    expect(() => render(<Stacks />)).not.toThrow();
  });
});
