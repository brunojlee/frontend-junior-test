import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Teste a Home page />', () => {
  it('Será validada a existência e o comportamento do botão Add Token.', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const homeLinkText = screen.getByText(/Wallet/i);
    expect(homeLinkText).toBeInTheDocument();
    const buttonElement = screen.getByRole('button', { name: /Add Token/i });
    userEvent.click(buttonElement);
    const navLinks = screen.getByRole('button', { name: /Back/i });
    expect(navLinks).toBeDefined();
  });
});
