/* eslint-disable no-promise-executor-return */
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const timeDelay = 500;

describe('Teste a Edit Token page />', () => {
  it('Será validada a página edição de um token com o mesmo nome e o comportamento da tabela.', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    window.alert = () => {};
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

    const secondButtonElement = screen.getByRole('button', { name: /Add Token/i });
    userEvent.click(secondButtonElement);
    const secInputs = screen.getAllByRole('textbox');
    const secSaveButton = screen.getByRole('button', { name: /Save/i });

    act(() => {
      userEvent.type(secInputs[0], 'TESTE');
      userEvent.type(secInputs[1], '100');
      fireEvent.click(secSaveButton);
    });

    await act(async () => {
      await delay(timeDelay);
    });

    const editButton = screen.getAllByTestId('edit-icon');

    act(() => {
      fireEvent.click(editButton[0]);
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
  });
});
