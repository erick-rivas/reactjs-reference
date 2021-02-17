import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react';
import App from 'renders/App';

test('app-test', () => {
  render(<App />);
  const linkElement = screen.getAllByText(/Login/i);
  expect(linkElement[0]).toBeInTheDocument();
});