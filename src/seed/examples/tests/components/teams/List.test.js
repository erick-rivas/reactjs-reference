import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import List from 'seed/examples/components/teams/List';

test('examples/components/teams/List', () => {
  mockGql.useQuery({"teams": data.GQL_TEAMS})
  render(<List />);
  expect(screen).toBeDefined()
});