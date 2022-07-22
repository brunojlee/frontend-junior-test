import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Teste do component App />', () => {
  it('Será validada a existência e o comportamento do componente App', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const homeText = screen.getByText(/Wallet/i);
    const tokensHeaderText = screen.getByText(/tokens/i);
    const balanceHeaderText = screen.getByText(/balance/i);
    const buttonElement = screen.getByRole('button', { name: /Add Token/i });
    expect(homeText).toBeInTheDocument();
    expect(tokensHeaderText).toBeInTheDocument();
    expect(balanceHeaderText).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();

    userEvent.click(buttonElement);
    const backButton = screen.getByRole('button', { name: /Back/i });
    expect(backButton).toBeDefined();
  });
});
