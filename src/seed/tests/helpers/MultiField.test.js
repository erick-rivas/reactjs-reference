import React from "react";
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import { MultiField } from 'seed/helpers';

test('helpers/MultiField', () => {
  render(<MultiField />);
  expect(screen).toBeDefined();
});