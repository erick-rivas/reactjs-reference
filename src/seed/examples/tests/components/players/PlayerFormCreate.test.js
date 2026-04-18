/*
__Seed builder__
  AUTO_GENERATED (Read only)
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import PlayerFormCreate from 'seed/examples/components/players/PlayerFormCreate';

test('examples/components/players/PlayerFormCreate', () => {
  mockGql.useQuery({"teams": data.GQL_TEAMS});
  mockGql.useQuery({"playerPositions": data.GQL_PLAYER_POSITIONS});
  mockGql.useSave({"savePlayer": data.GQL_PLAYER});
  render(<PlayerFormCreate />);
  expect(screen).toBeDefined();
});