/*
__Seed builder__
  AUTO_GENERATED (Read only)
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import Examples from 'seed/examples/components/Examples';

test('examples/components/Examples', () => {
  render(<Examples />);
  expect(screen).toBeDefined();
});