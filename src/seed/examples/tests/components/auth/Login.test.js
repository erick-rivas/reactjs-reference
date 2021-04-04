import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import Login from 'seed/examples/components/auth/Login';

test('examples/components/auth/Login', () => {
  render(<Login />);
  expect(screen).toBeDefined();
});