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
import TeamFormEdit from 'seed/examples/components/teams/TeamFormEdit';

test('examples/components/teams/TeamFormEdit', () => {
  mockGql.useDetail({"team": data.GQL_TEAM});
  mockGql.useQuery({"teams": data.GQL_TEAMS});
  mockGql.useSet({"setTeam": data.GQL_TEAM});
  render(<TeamFormEdit />);
  expect(screen).toBeDefined();
});