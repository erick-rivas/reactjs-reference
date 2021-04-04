import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data'
import FormSave from 'seed/examples/components/players/FormSave';

test('examples/components-/players/FormSave', () => {
    mockGql.useQuery({"teams": data.GQL_TEAMS});
    mockGql.useQuery({"playerPositions": data.GQL_PLAYER_POSITIONS});
  mockGql.useSave({"player": data.GQL_PLAYER});
  render(<FormSave />);
  expect(screen).toBeDefined();
});