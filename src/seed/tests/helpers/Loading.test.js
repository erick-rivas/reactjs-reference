import React from "react";
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import { Loading } from 'seed/helpers';

test('helpers/Loading', () => {
  render(<Loading />);
  expect(screen).toBeDefined();
});