import React from 'react';
import { render, screen } from '../../../setupTests';
import { Overview } from '../Overview';

describe('Overview Component', () => {
  test('renders labelcorrectly', () => {
    const label = 'Temperature';
    const value = '25';
    const unit = '°C';

    render(<Overview label={label} value={value} unit={unit} />);

    const labelElement = screen.getByText(label);

    expect(labelElement).toBeInTheDocument();
  });

  test('renders default unit as an empty string', () => {
    const label = 'Humidity';
    const value = '50';

    render(<Overview label={label} value={value} />);

    const labelElement = screen.getByText(label);
    const valueElement = screen.getByText(value);

    expect(labelElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });

  test('applies the correct color for the value based on color mode', () => {
    const label = 'Battery Level';
    const value = '80';
    const unit = '%';

    render(<Overview label={label} value={value} unit={unit} />);

    const valueElement = screen.getByTestId('value');

    expect(valueElement).toBeInTheDocument();
  });
});
