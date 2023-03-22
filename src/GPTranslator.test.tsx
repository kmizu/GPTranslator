import React from 'react';
import { render, screen } from '@testing-library/react';
import GPTranslator from './GPTranslator';

test('renders learn react link', () => {
  render(<GPTranslator/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
