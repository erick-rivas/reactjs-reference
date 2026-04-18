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
import PlayerPositionFormCreate from 'seed/examples/components/player_positions/PlayerPositionFormCreate';

test('examples/components/player_positions/PlayerPositionFormCreate', () => {
  mockGql.useSave({"savePlayerPosition": data.GQL_PLAYER_POSITION});
  render(<PlayerPositionFormCreate />);
  expect(screen).toBeDefined();
});