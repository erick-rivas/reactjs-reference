import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import FormSave from 'seed/examples/components/users/FormSave';

test('examples/components-/users/FormSave', () => {
    mockGql.useQuery({"teams": data.GQL_TEAMS});
  mockGql.useSave({"user": data.GQL_USER})
  render(<FormSave />);
  expect(screen).toBeDefined()
});