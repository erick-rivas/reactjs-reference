/*
__Seed builder__
  (Read_only) Example test
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import Examples from 'seed/examples/components/Examples';

test('examples/components/Examples', () => {
  render(<Examples />);
  expect(screen).toBeDefined();
});