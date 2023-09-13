import React from "react";
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import { FileField } from 'seed/helpers';

test('helpers/FileField', () => {
  render(<FileField />);
  expect(screen).toBeDefined();
});