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
import TeamList from 'seed/examples/components/teams/TeamList';

test('examples/components/teams/TeamList', () => {
  mockGql.usePagination({"teamPagination": data.GQL_TEAM_PAGINATION})
  render(<TeamList />);
  expect(screen).toBeDefined()
});