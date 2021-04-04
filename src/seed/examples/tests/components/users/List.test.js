import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import List from 'seed/examples/components/users/List';

test('examples/components/users/List', () => {
  mockGql.usePagination({"userPagination": data.GQL_USER_PAGINATION})
  render(<List />);
  expect(screen).toBeDefined()
});