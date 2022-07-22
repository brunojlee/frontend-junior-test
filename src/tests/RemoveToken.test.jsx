/* eslint-disable no-promise-executor-return */
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const timeDelay = 500;

describe('Teste de remoção />', () => {
  it('Será validada a remoção de um token e o comportamento da tabela.', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    window.confirm = () => {};

    const buttonElement = screen.getByRole('button', { name: /Add Token/i });
    userEvent.click(buttonElement);
    const inputs = screen.getAllByRole('textbox');
    const saveButton = screen.getByRole('button', { name: /Save/i });

    act(() => {
      userEvent.type(inputs[0], 'TEST');
      userEvent.type(inputs[1], '100');
      fireEvent.click(saveButton);
    });

    await act(async () => {
      await delay(timeDelay);
    });

    const editButton = screen.getByTestId('edit-icon');

    act(() => {
      fireEvent.click(editButton);
    });

    await act(async () => {
      await delay(timeDelay);
    });

    const editInputs = screen.getAllByRole('textbox');
    const saveEditButton = screen.getByRole('button', { name: /Save/i });

    act(() => {
      userEvent.type(editInputs[0], 'E');
      userEvent.type(editInputs[1], '10');
      fireEvent.click(saveEditButton);
    });

    await act(async () => {
      await delay(timeDelay);
    });
    const tokenText = screen.getByText(/TESTE/i);
    expect(tokenText).toBeInTheDocument();

    const newEditButton = screen.getByTestId('edit-icon');
    act(() => {
      fireEvent.click(newEditButton);
    });
    await act(async () => {
      await delay(timeDelay);
    });

    const removeButton = screen.getByRole('button', { name: /Remove/i });

    act(() => {
      fireEvent.click(removeButton);
    });

    await act(async () => {
      await delay(timeDelay);
    });
    expect(screen.queryByText(/TESTE/i)).not.toBeInTheDocument();
  });
});
