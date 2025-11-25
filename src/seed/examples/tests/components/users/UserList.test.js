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
import UserList from 'seed/examples/components/users/UserList';

test('examples/components/users/UserList', () => {
  mockGql.usePagination({"userPagination": data.GQL_USER_PAGINATION})
  render(<UserList />);
  expect(screen).toBeDefined()
});