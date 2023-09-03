/*
__Seed builder__
  (Read_only) Example test
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data';
import FormSet from 'seed/examples/components/players/FormSet';

test('examples/components/players/FormSet', () => {
  mockGql.useDetail({"player": data.GQL_PLAYER});
  mockGql.useQuery({"teams": data.GQL_TEAMS});
  mockGql.useQuery({"playerPositions": data.GQL_PLAYER_POSITIONS});
  mockGql.useSet({"setPlayer": data.GQL_PLAYER});
  render(<FormSet />);
  expect(screen).toBeDefined();
});