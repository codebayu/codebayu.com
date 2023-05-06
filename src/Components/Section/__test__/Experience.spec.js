import { render, screen } from '../../../setupTests';
import Experience from '../Experience';
import experience from '../../../Service/experience.json';

jest.mock('../../../Service/experience.json', () => [
  {
    position: 'Front-end Developer',
    company: 'ABC Company',
    periods: '2020 - Present',
    technology_used: 'React, TypeScript',
    project_note: 'Some Project Note',
    projects: ['Project 1', 'Project 2'],
  },
]);

describe('Banner component', () => {
  it('should render the heading', () => {
    render(<Experience />);
    const heading = screen.getByText(/My Experience/i);
    expect(heading).toBeInTheDocument();
  });

  it('should render correct experience information', () => {
    render(<Experience />);
    experience.forEach((item) => {
      expect(screen.getByText(item.position)).toBeInTheDocument();
      expect(screen.getByText(item.periods)).toBeInTheDocument();
      expect(screen.getByText(`${item.company} |`)).toBeInTheDocument();
      expect(screen.getByText(item.technology_used)).toBeInTheDocument();
      expect(
        screen.getByText(`Project (${item.project_note})`)
      ).toBeInTheDocument();
      item.projects.forEach((project) => {
        expect(screen.getByText(project)).toBeInTheDocument();
      });
    });
  });

  it('renders without throwing an error', () => {
    expect(() => render(<Experience />)).not.toThrow();
  });
});
