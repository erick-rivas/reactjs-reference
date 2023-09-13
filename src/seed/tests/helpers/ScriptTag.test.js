import React from "react";
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render } from 'seed/jest';
import { ScriptTag } from 'seed/helpers';

test('helpers/ScriptTag', () => {
  render(<ScriptTag />);
  expect(screen).toBeDefined();
});