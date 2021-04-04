import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import Details from 'seed/examples/components/teams/Details';

test('examples/components/teams/Details', () => {
  mockGql.useDetail({"team": data.GQL_TEAM});
  mockGql.useDelete({"team": data.GQL_TEAM});
  render(<Details />);
  expect(screen).toBeDefined()
});