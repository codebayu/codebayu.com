import { render, screen } from "../../setupTests"
import { Stack } from '../Stack'

describe('Stack Component', () => {
  
  const props = {
    label: 'Bootstrap',
    src: 'https://bit.ly/dan-abramov',
    labelColor: '#61dafb'
  }

  it('accepts and renders the correct props', () => {
    render(<Stack {...props}/>);
    expect(screen.getByText(props.label)).toBeInTheDocument();
    
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', props.src);
  });

  it('renders without throwing an error', () => {
    expect(() => render(<Stack {...props}/>)).not.toThrow();
  });
});