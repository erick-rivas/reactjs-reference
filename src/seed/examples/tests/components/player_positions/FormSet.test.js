import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { render, mockGql } from 'seed/jest';
import * as data from 'seed/examples/tests/data';
import FormSet from 'seed/examples/components/player_positions/FormSet';

test('examples/components/player_positions/FormSet', () => {
  mockGql.useDetail({"playerPosition": data.GQL_PLAYER_POSITION});
  mockGql.useSet({"setPlayerPosition": data.GQL_PLAYER_POSITION});
  render(<FormSet />);
  expect(screen).toBeDefined();
});