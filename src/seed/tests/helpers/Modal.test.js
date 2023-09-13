import React from "react";
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import { Modal } from 'seed/helpers';

test('helpers/Modal', () => {
  render(<Modal />);
  expect(screen).toBeDefined();
});