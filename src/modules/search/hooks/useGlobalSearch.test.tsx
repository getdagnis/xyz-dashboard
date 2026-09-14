import { createElement, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { act, cleanup, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { useGlobalSearch } from './useGlobalSearch';

function createWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return function Wrapper({ children }: { children: ReactNode }) {
    return createElement(QueryClientProvider, { client: queryClient }, children);
  };
}

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe('useGlobalSearch', () => {
  it('debounces and resolves all three search sources concurrently', async () => {
    vi.useFakeTimers();

    const { result, rerender } = renderHook(({ query }) => useGlobalSearch(query), {
      initialProps: { query: '' },
      wrapper: createWrapper(),
    });

    rerender({ query: 'VPN' });

    expect(result.current.groups.every((group) => group.state === 'loading')).toBe(true);

    await act(async () => {
      await vi.advanceTimersByTimeAsync(299);
    });

    expect(result.current.isSettled).toBe(false);

    await act(async () => {
      await vi.advanceTimersByTimeAsync(1);
    });

    // debounce elapsed --> all three requests are now active
    expect(result.current.groups.every((group) => group.state === 'loading')).toBe(true);

    await act(async () => {
      // 2  mock latency + tiny flush for query notifications.
      await vi.advanceTimersByTimeAsync(1101);
    });

    expect(result.current.groups.every((group) => group.state === 'results')).toBe(true);

    expect(result.current.isSettled).toBe(true);
  });
});
