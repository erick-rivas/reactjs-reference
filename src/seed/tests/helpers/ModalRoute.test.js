import React from "react";
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import { ModalRoute } from 'seed/helpers';

test('helpers/ModalRoute', () => {
  render(<ModalRoute />);
  expect(screen).toBeDefined();
});