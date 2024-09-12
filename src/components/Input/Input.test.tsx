import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';

describe('Input component', () => {
  it('renders correctly', () => {
    const { getByLabelText } = render(<Input name="test" id="test" label="Test Input" />);
    expect(getByLabelText('Test Input')).toBeInTheDocument();
  });

  it('applies mask correctly', () => {
    const { getByLabelText } = render(<Input name="phone" id="phone" label="Phone" mask="(##) #####-####" />);
    const input = getByLabelText('Phone') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '1234567890' } });
    expect(input.value).toBe('(12) 3456-7890');
  });

  it('displays error message', () => {
    const { getByText } = render(<Input name="test" id="test" errors="This field is required" />);
    expect(getByText('This field is required')).toBeInTheDocument();
  });
});