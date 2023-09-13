import React from "react";
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import { Route } from 'seed/helpers';

test('helpers/Route', () => {
  render(<Route />);
  expect(screen).toBeDefined();
});