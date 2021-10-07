import { render, screen } from '@testing-library/react';
import App from './app';

beforeEach(() => {
  render(<App />);
});

it('has a title', () => {
  const title = screen.getByText("React Demo");
  expect(title).toBeInTheDocument();
});

it('has a home link', () => {
  const link = screen.getByRole('link', {name: 'Home'});
  expect(link).toBeInTheDocument();
});

it('has a game link', () => {
  const link = screen.getByRole('link', {name: 'Game'});
  expect(link).toBeInTheDocument();
});