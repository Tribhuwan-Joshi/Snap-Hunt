import React from 'react';
import { render, screen } from '@testing-library/react';
import {} from "@testing-library/jest-dom"
import App from './App';
test('renders snapHunt Header', () => {
  render(<App />);

  const linkElement = screen.getByText(/snap/i);
  expect(linkElement).toBeInTheDocument();
});
