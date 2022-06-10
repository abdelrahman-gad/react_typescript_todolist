import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

import {fetchTodos} from './actions';
test('renders learn react link', () => {
  render(<App fetchTodos={fetchTodos} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
