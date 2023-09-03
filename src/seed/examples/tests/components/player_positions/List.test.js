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
import List from 'seed/examples/components/player_positions/List';

test('examples/components/player_positions/List', () => {
  mockGql.usePagination({"playerPositionPagination": data.GQL_PLAYER_POSITION_PAGINATION})
  render(<List />);
  expect(screen).toBeDefined()
});