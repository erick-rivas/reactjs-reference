import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import Details from 'seed/examples/components/users/Details';

test('examples/components/users/Details', () => {
  mockGql.useDetail({"user": data.GQL_USER});
  mockGql.useDelete({"deleteUser": data.GQL_USER});
  render(<Details />);
  expect(screen).toBeDefined()
});