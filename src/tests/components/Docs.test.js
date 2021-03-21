import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import Docs from 'components/Docs';

test('Docs', () => {
  render(<Docs />);
  expect(screen).toBeDefined();
});