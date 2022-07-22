/* eslint-disable no-promise-executor-return */
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

import App from '../App';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const timeDelay = 1000;

describe('Teste a Add Token page />', () => {
  it('Será validada a tentativa de adição de um token com campos vazios.', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    window.alert = () => {};
    const buttonElement = screen.getByRole('button', { name: /Add Token/i });
    userEvent.click(buttonElement);
    const backButton = screen.getByRole('button', { name: /Back/i });
    expect(backButton).toBeDefined();
    const saveButton = screen.getByRole('button', { name: /Save/i });
    act(() => {
      fireEvent.click(saveButton);
    });
    await act(async () => {
      await delay(timeDelay);
    });
    const tokenText = screen.queryByText(/TEST/i);
    expect(tokenText).not.toBeInTheDocument();
  });

  it('Será validada a página adição de um token e o comportamento da tabela.', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const buttonElement = screen.getByRole('button', { name: /Add Token/i });
    userEvent.click(buttonElement);
    const backButton = screen.getByRole('button', { name: /Back/i });
    expect(backButton).toBeDefined();
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
    const tokenText = screen.getByText(/TEST/i);
    expect(tokenText).toBeInTheDocument();
  });

  it('Será validada a página adição de dois tokens com mesmo nome e o comportamento da tabela.', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
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

    const addSaveButton = screen.getByRole('button', { name: /Save/i });

    expect(addSaveButton).toBeInTheDocument();
  });
});
