import { render, screen } from '../../setupTests';
import Project from '.';

describe('Stack Component', () => {
  const props = {
    title: 'test title.',
    description: 'test description',
    technology_used: 'React, Chakra UI, Firebase',
    repository: 'https://github.com/Bayusetiawan45/academy',
    preview_image: ['https://bit.ly/dan-abramov'],
  };

  it('should render the slider', () => {
    render(<Project project={props} />);
    const slider = screen.getByTestId('slider');
    expect(slider).toBeInTheDocument();
  });

  it('should render project information', () => {
    render(<Project project={props} />);
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.description)).toBeInTheDocument();
    expect(screen.getByText(props.technology_used)).toBeInTheDocument();
    expect(screen.getByText(props.repository)).toBeInTheDocument();
  });
});
