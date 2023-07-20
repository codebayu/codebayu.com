import { render, screen } from '../../setupTests';
import experience from '../../Service/experience.json';
import { Experience } from '../Experience';

jest.mock('../../Service/experience.json', () => [
  {
    position: 'Front-end Developer',
    company: 'ABC Company',
    periods: '2020 - Present',
    technology_used: [
      {
        logo: './stack/logo512.webp',
        label: 'React Js',
        labelColor: '#61dafb',
      },
      {
        logo: './stack/ExpressJS.webp',
        label: 'Express Js',
        labelColor: '#000',
      },
      {
        logo: './stack/firebase.svg',
        label: 'Firebase',
        labelColor: '#fcca3f',
      },
      {
        logo: './stack/chakra.webp',
        label: 'Chakra UI',
        labelColor: '#45c6c0',
      },
    ],
    project_note: 'Some Project Note',
    projects: ['Project 1', 'Project 2'],
  },
]);

describe('Banner component', () => {
  it('should render the heading', () => {
    render(<Experience />);
    const heading = screen.getByText(/Experience/i);
    expect(heading).toBeInTheDocument();
  });

  it('should render correct experience information', () => {
    render(<Experience />);
    experience.forEach((item) => {
      expect(
        screen.getByText(`${item.position} at ${item.company}`)
      ).toBeInTheDocument();
      expect(screen.getByText(`~ ${item.periods}`)).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
      item.projects.forEach((project) => {
        expect(screen.getByText(project)).toBeInTheDocument();
      });
    });
  });

  it('renders without throwing an error', () => {
    expect(() => render(<Experience />)).not.toThrow();
  });
});
