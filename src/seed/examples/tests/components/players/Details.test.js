import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import Details from 'seed/examples/components/players/Details';

test('examples/components/players/Details', () => {
  mockGql.useDetail({"player": data.GQL_PLAYER});
  mockGql.useDelete({"deletePlayer": data.GQL_PLAYER});
  render(<Details />);
  expect(screen).toBeDefined()
});