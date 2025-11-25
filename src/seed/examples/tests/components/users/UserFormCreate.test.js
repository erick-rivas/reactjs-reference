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
import UserFormCreate from 'seed/examples/components/users/UserFormCreate';

test('examples/components/users/UserFormCreate', () => {
  mockGql.useQuery({"teams": data.GQL_TEAMS});
  mockGql.useSave({"saveUser": data.GQL_USER});
  render(<UserFormCreate />);
  expect(screen).toBeDefined();
});