/*
__Seed builder__
  AUTO_GENERATED (Read only)
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import Logout from 'seed/examples/components/auth/Logout';

test('examples/components/auth/Logout', () => {
  render(<Logout />);
  expect(screen).toBeDefined();
});