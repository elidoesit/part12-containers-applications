import React from 'react';
import { render, screen } from '@testing-library/react';
import Todo from '../Todotest';

test('renders todo text', () => {
  const todo = { text: 'Buy groceries', completed: false };
  render(<Todo todo={todo} />);
  const todoText = screen.getByText(/Buy groceries/i);
  expect(todoText).not.toBeNull();
});

test('renders checkbox checked status', () => {
  const todo = { text: 'Buy groceries', completed: true };
  render(<Todo todo={todo} />);
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox.checked).toBe(true);
});
