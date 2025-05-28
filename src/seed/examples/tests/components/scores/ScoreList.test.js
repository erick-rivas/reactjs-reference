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
import ScoreList from 'seed/examples/components/scores/ScoreList';

test('examples/components/scores/ScoreList', () => {
  mockGql.usePagination({"scorePagination": data.GQL_SCORE_PAGINATION})
  render(<ScoreList />);
  expect(screen).toBeDefined()
});