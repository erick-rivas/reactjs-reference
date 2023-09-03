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
import List from 'seed/examples/components/players/List';

test('examples/components/players/List', () => {
  mockGql.usePagination({"playerPagination": data.GQL_PLAYER_PAGINATION})
  render(<List />);
  expect(screen).toBeDefined()
});