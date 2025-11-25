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
import MatchDetails from 'seed/examples/components/matches/MatchDetails';

test('examples/components/matches/MatchDetails', () => {
  mockGql.useDetail({"match": data.GQL_MATCH});
  mockGql.useDelete({"deleteMatch": data.GQL_MATCH});
  render(<MatchDetails />);
  expect(screen).toBeDefined()
});