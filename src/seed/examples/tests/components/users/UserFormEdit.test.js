/*
__Seed builder__
  (Read_only) Example test
  Be careful copying content
*/

import React from "react";
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data';
import UserFormEdit from 'seed/examples/components/users/UserFormEdit';

test('examples/components/users/UserFormEdit', () => {
  mockGql.useDetail({"user": data.GQL_USER});
  mockGql.useQuery({"teams": data.GQL_TEAMS});
  mockGql.useSet({"setUser": data.GQL_USER});
  render(<UserFormEdit />);
  expect(screen).toBeDefined();
});