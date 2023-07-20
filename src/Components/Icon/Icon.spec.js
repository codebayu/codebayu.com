import { render } from '../../setupTests';
import { Icon } from '.';

describe('Icon component', () => {
  const props = {
    link: 'https://example.com',
    icon: 'email',
    label: 'Email',
  };

  it('renders without throwing an error', () => {
    expect(() => render(<Icon {...props} />)).not.toThrow();
  });
});
