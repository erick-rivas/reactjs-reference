/*
__Seed builder__
  (Read_only) Example test
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data';
import FormSet from 'seed/examples/components/teams/FormSet';

test('examples/components/teams/FormSet', () => {
  mockGql.useDetail({"team": data.GQL_TEAM});
  mockGql.useQuery({"teams": data.GQL_TEAMS});
  mockGql.useSet({"setTeam": data.GQL_TEAM});
  render(<FormSet />);
  expect(screen).toBeDefined();
});