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
import ScoreDetails from 'seed/examples/components/scores/ScoreDetails';

test('examples/components/scores/ScoreDetails', () => {
  mockGql.useDetail({"score": data.GQL_SCORE});
  mockGql.useDelete({"deleteScore": data.GQL_SCORE});
  render(<ScoreDetails />);
  expect(screen).toBeDefined()
});