import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import Details from 'seed/examples/components/matches/Details';

test('examples/components/matches/Details', () => {
  mockGql.useDetail({"match": data.GQL_MATCH});
  mockGql.useDelete({"match": data.GQL_MATCH});
  render(<Details />);
  expect(screen).toBeDefined()
});