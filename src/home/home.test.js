import { render, screen } from '@testing-library/react';
import Home from './home';

it('has a title', () => {
    render(<Home />);
    const title = screen.getByText("Home");
    expect(title).toBeInTheDocument();
  });