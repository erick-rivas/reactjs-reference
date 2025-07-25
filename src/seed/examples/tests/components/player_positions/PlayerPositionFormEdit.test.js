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
import PlayerPositionFormEdit from 'seed/examples/components/player_positions/PlayerPositionFormEdit';

test('examples/components/player_positions/PlayerPositionFormEdit', () => {
  mockGql.useDetail({"playerPosition": data.GQL_PLAYER_POSITION});
  mockGql.useSet({"setPlayerPosition": data.GQL_PLAYER_POSITION});
  render(<PlayerPositionFormEdit />);
  expect(screen).toBeDefined();
});