// Import required libraries
import React from 'react';
import { render, screen } from '../../../setupTests';
import { Calendar } from '../Calendar';

const testData = {
  weeks: [],
  months: [{ name: 'test' }],
  colors: [],
};

describe('Calendar Component', () => {
  test('renders months correctly', () => {
    render(<Calendar data={testData} />);
    testData.months.forEach((month) => {
      const monthElement = screen.getByText(month.name);
      expect(monthElement).toBeInTheDocument();
    });
  });

  test('renders contribution colors correctly', () => {
    render(<Calendar data={testData} />);
    testData.colors.forEach((color) => {
      const colorElement = screen.getByRole('button', { name: color });
      expect(colorElement).toBeInTheDocument();
    });
  });

  test('renders Contribution', () => {
    render(<Calendar data={testData} />);
    expect(screen.getByTestId('contribution')).toBeInTheDocument();
  });

  test('renders Less or More Indicator', () => {
    render(<Calendar data={testData} />);
    expect(screen.getByTestId('less-more')).toBeInTheDocument();
  });

  test('renders Less Indicator', () => {
    render(<Calendar data={testData} />);
    expect(screen.getByTestId('less')).toBeInTheDocument();
  });

  test('renders More Indicator', () => {
    render(<Calendar data={testData} />);
    expect(screen.getByTestId('more')).toBeInTheDocument();
  });

  it('renders without throwing an error', () => {
    expect(() => render(<Calendar data={testData} />)).not.toThrow();
  });
});
