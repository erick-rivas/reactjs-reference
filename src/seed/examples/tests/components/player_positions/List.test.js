import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import List from 'seed/examples/components/player_positions/List';

test('examples/components/player_positions/List', () => {
  mockGql.useQuery({"playerPositions": data.GQL_PLAYER_POSITIONS})
  render(<List />);
  expect(screen).toBeDefined()
});