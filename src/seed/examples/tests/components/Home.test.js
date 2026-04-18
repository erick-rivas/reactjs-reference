/*
__Seed builder__
  AUTO_GENERATED (Read only)
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import Home from 'seed/examples/components/Home';

test('examples/components/home', () => {
  render(<Home />);
  expect(screen).toBeDefined();
});