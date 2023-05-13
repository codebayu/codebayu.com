import { render } from '../../setupTests';
import FramerMotion from '.';

describe('Framer Motion component', () => {

  it('renders without throwing an error', () => {
    expect(() => render(<FramerMotion />)).not.toThrow();
  });
});
