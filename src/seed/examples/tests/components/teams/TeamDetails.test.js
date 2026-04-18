/*
__Seed builder__
  AUTO_GENERATED (Read only)
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import TeamDetails from 'seed/examples/components/teams/TeamDetails';

test('examples/components/teams/TeamDetails', () => {
  mockGql.useDetail({"team": data.GQL_TEAM});
  mockGql.useDelete({"deleteTeam": data.GQL_TEAM});
  render(<TeamDetails />);
  expect(screen).toBeDefined()
});