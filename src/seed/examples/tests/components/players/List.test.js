import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import List from 'seed/examples/components/players/List';

test('examples/components/players/List', () => {
  mockGql.useQuery({"players": data.GQL_PLAYERS})
  render(<List />);
  expect(screen).toBeDefined()
});