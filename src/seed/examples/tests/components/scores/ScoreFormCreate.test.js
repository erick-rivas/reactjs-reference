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
import ScoreFormCreate from 'seed/examples/components/scores/ScoreFormCreate';

test('examples/components/scores/ScoreFormCreate', () => {
  mockGql.useQuery({"players": data.GQL_PLAYERS});
  mockGql.useQuery({"matches": data.GQL_MATCHES});
  mockGql.useSave({"saveScore": data.GQL_SCORE});
  render(<ScoreFormCreate />);
  expect(screen).toBeDefined();
});