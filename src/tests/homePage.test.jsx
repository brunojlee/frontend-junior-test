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
    const walletText = screen.getByText(/Wallet/i);
    expect(walletText).toBeInTheDocument();
    const buttonElement = screen.getByRole('button', { name: /Add Token/i });
    userEvent.click(buttonElement);
    const backButton = screen.getByRole('button', { name: /Back/i });
    expect(backButton).toBeDefined();
  });
});
