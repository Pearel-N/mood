import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Home from '../app/page';

vi.mock('@clerk/nextjs/server', () => {
  return {
    auth: () => new Promise((resolve) => resolve({ userId: 'asdfafasfda' })),
    ClerkProvider: ({ children }) => <div>{children}</div>,
    useUser: () => ({
      isSignedIn: true,
      user: {
        id: 'asdfafasfda',
        fullName: 'John Doe',
      },
    }),
  };
});

test('Home', async () => {
  render(await Home());
  expect(screen.getByText('The best Journal app, period.')).toBeTruthy();
});
