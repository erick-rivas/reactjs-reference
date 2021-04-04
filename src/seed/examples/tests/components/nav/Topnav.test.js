import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import Topnav from 'seed/examples/components/navigation/Topnav';

test('examples/components/nav/Topnav', () => {
  render(<Topnav />);
  expect(screen).toBeDefined();
});