import React from "react";
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import { StyleTag } from 'seed/helpers';

test('helpers/StyleTag', () => {
  render(<StyleTag />);
  expect(screen).toBeDefined();
});