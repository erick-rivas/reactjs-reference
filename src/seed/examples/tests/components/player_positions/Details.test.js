import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import Details from 'seed/examples/components/player_positions/Details';

test('examples/components/player_positions/Details', () => {
  mockGql.useDetail({"playerPosition": data.GQL_PLAYER_POSITION})
  mockGql.useDelete({"playerPosition": data.GQL_PLAYER_POSITION})
  render(<Details />);
  expect(screen).toBeDefined()
});