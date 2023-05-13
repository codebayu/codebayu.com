import { Card } from '.'
import { render, screen } from "../../setupTests"

describe('Card Component', () => {
  
  const props = {
    label: 'test label',
    src: 'https://bit.ly/dan-abramov',
    date: '12 January 2023'
  }

  it('accepts and renders the correct props', () => {
    render(<Card {...props}/>);

    expect(screen.getByText(props.label)).toBeInTheDocument();
    expect(screen.getByText(props.date)).toBeInTheDocument();
    
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', props.src);
  });

  it('renders without throwing an error', () => {
    expect(() => render(<Card {...props}/>)).not.toThrow();
  });
});