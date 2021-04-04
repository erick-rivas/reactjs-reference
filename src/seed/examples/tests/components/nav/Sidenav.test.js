import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import Sidenav from 'seed/examples/components/navigation/Sidenav';

test('examples/components/nav/Sidenav', () => {
  render(<Sidenav />);
  expect(screen).toBeDefined();
});