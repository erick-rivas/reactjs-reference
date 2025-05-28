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
import ScoreFormEdit from 'seed/examples/components/scores/ScoreFormEdit';

test('examples/components/scores/ScoreFormEdit', () => {
  mockGql.useDetail({"score": data.GQL_SCORE});
  mockGql.useQuery({"players": data.GQL_PLAYERS});
  mockGql.useQuery({"matches": data.GQL_MATCHES});
  mockGql.useSet({"setScore": data.GQL_SCORE});
  render(<ScoreFormEdit />);
  expect(screen).toBeDefined();
});