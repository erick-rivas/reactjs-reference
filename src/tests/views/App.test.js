import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import App from 'views/App';

test('app-test', () => {
  render(<App />);
    expect(screen).toBeDefined()
});