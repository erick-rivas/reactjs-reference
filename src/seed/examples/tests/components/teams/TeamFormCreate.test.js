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
import TeamFormCreate from 'seed/examples/components/teams/TeamFormCreate';

test('examples/components/teams/TeamFormCreate', () => {
  mockGql.useQuery({"teams": data.GQL_TEAMS});
  mockGql.useSave({"saveTeam": data.GQL_TEAM});
  render(<TeamFormCreate />);
  expect(screen).toBeDefined();
});