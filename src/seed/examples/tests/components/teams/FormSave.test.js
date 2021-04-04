import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import FormSave from 'seed/examples/components/teams/FormSave';

test('examples/components-/teams/FormSave', () => {
    mockGql.useQuery({"teams": data.GQL_TEAMS});
  mockGql.useSave({"team": data.GQL_TEAM});
  render(<FormSave />);
  expect(screen).toBeDefined();
});