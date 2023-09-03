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
import FormSave from 'seed/examples/components/matches/FormSave';

test('examples/components/matches/FormSave', () => {
  mockGql.useQuery({"teams": data.GQL_TEAMS});
  mockGql.useSave({"saveMatch": data.GQL_MATCH});
  render(<FormSave />);
  expect(screen).toBeDefined();
});