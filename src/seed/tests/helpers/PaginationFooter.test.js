import React from "react";
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import { PaginationFooter } from 'seed/helpers';

test('helpers/PaginationFooter', () => {
  render(<PaginationFooter />);
  expect(screen).toBeDefined();
});