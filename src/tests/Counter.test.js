import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Provides additional matchers
import Counter from '../components/Counter';

beforeEach(() => {
  console.log(`Running test: ${expect.getState().currentTestName}`);
  render(<Counter />);
});

// Check that the header with the text "Counter" is present
test('renders counter message', () => {
  expect(screen.getByText(/counter/i)).toBeInTheDocument();
});

// Check that the initial count displayed is 0
test('should render initial count with value of 0', () => {
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

// Simulate a click on the "+" button and verify the count increases
test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  expect(screen.getByTestId('count')).toHaveTextContent('1');
});

// Simulate a click on the "-" button and verify the count decreases
test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  expect(screen.getByTestId('count')).toHaveTextContent('-1');
});
