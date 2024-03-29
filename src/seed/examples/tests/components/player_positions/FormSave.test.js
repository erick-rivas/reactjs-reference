/*
__Seed builder__
  (Read_only) Example test
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import FormSave from 'seed/examples/components/player_positions/FormSave';

test('examples/components/player_positions/FormSave', () => {
  mockGql.useSave({"savePlayerPosition": data.GQL_PLAYER_POSITION});
  render(<FormSave />);
  expect(screen).toBeDefined();
});