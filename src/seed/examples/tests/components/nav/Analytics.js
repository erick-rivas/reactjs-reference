import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import Analytics from 'seed/examples/components/navigation/Analytics';

test('examples/components/nav/Analytics', () => {
  render(<Analytics />);
  expect(screen).toBeDefined();
});