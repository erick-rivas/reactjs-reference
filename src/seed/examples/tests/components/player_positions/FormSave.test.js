import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import FormSave from 'seed/examples/components/player_positions/FormSave';

test('examples/components-/player_positions/FormSave', () => {
  mockGql.useSave({"playerPosition": data.GQL_PLAYER_POSITION})
  render(<FormSave />);
  expect(screen).toBeDefined()
});