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
import MatchList from 'seed/examples/components/matches/MatchList';

test('examples/components/matches/MatchList', () => {
  mockGql.usePagination({"matchPagination": data.GQL_MATCH_PAGINATION})
  render(<MatchList />);
  expect(screen).toBeDefined()
});