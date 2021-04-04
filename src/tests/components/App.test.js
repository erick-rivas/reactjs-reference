import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import App from 'components/App';

test('App', () => {
  render(<App />);
  expect(screen).toBeDefined();
});