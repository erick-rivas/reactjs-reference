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
import PlayerDetails from 'seed/examples/components/players/PlayerDetails';

test('examples/components/players/PlayerDetails', () => {
  mockGql.useDetail({"player": data.GQL_PLAYER});
  mockGql.useDelete({"deletePlayer": data.GQL_PLAYER});
  render(<PlayerDetails />);
  expect(screen).toBeDefined()
});