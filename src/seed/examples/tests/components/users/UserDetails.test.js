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
import UserDetails from 'seed/examples/components/users/UserDetails';

test('examples/components/users/UserDetails', () => {
  mockGql.useDetail({"user": data.GQL_USER});
  mockGql.useDelete({"deleteUser": data.GQL_USER});
  render(<UserDetails />);
  expect(screen).toBeDefined()
});