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
import FormSet from 'seed/examples/components/matches/FormSet';

test('examples/components/matches/FormSet', () => {
  mockGql.useDetail({"match": data.GQL_MATCH});
  mockGql.useQuery({"teams": data.GQL_TEAMS});
  mockGql.useSet({"setMatch": data.GQL_MATCH});
  render(<FormSet />);
  expect(screen).toBeDefined();
});