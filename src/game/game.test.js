import { render, screen } from '@testing-library/react';
import Game from './game';

it('has a title', () => {
    render(<Game />);
    const title = screen.getByText("Game");
    expect(title).toBeInTheDocument();
  });