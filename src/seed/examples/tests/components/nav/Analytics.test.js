/*
__Seed builder__
  (Read_only) Example test
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import Analytics from 'seed/examples/components/nav/Analytics';

test('examples/components/nav/Analytics', () => {
  render(<Analytics />);
  expect(screen).toBeDefined();
});