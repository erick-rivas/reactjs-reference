import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data';
import FormSet from 'seed/examples/components/scores/FormSet';

test('examples/components/scores/FormSet', () => {
  mockGql.useDetail({"score": data.GQL_SCORE});
    mockGql.useQuery({"players": data.GQL_PLAYERS});
    mockGql.useQuery({"matches": data.GQL_MATCHES});
  mockGql.useSet({"score": data.GQL_SCORE});
  render(<FormSet />);
  expect(screen).toBeDefined();
});