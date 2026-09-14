import { useQueries, type UseQueryResult } from '@tanstack/react-query';

import { searchArticles } from '../../../services/search/knowledgeArticleSearchService';
import { searchProducts } from '../../../services/search/productSearchService';
import { searchTickets } from '../../../services/search/supportTicketSearchService';
import type { SearchResult } from '../../../services/mockData';

import type { SearchResultGroup } from '../types';
import { useDebouncedValue } from './useDebouncedValue';

const SEARCH_DEBOUNCE_MS = 300;

function toGroup(
  id: string,
  label: string,
  query: UseQueryResult<readonly SearchResult[], Error>,
  forceLoading: boolean,
): SearchResultGroup {
  if (forceLoading || query.isPending || query.isFetching) {
    return {
      id,
      label,
      state: 'loading',
      results: [],
    };
  }

  if (query.isError) {
    return {
      id,
      label,
      state: 'error',
      results: [],
    };
  }

  const results = query.data ?? [];

  return {
    id,
    label,
    state: results.length > 0 ? 'results' : 'empty',
    results: results.map((result) => result.title),
  };
}

export function useGlobalSearch(query: string) {
  const normalizedQuery = query.trim();
  const debouncedQuery = useDebouncedValue(normalizedQuery, SEARCH_DEBOUNCE_MS);

  const isDebouncing = normalizedQuery !== debouncedQuery;
  const enabled = debouncedQuery.length > 0 && !isDebouncing;

  const [productsQuery, articlesQuery, ticketsQuery] = useQueries({
    queries: [
      {
        queryKey: ['global-search', 'products', debouncedQuery],
        queryFn: ({ signal }) => searchProducts(debouncedQuery, signal),
        enabled,
        retry: false,
      },
      {
        queryKey: ['global-search', 'articles', debouncedQuery],
        queryFn: ({ signal }) => searchArticles(debouncedQuery, signal),
        enabled,
        retry: false,
      },
      {
        queryKey: ['global-search', 'tickets', debouncedQuery],
        queryFn: ({ signal }) => searchTickets(debouncedQuery, signal),
        enabled,
        retry: false,
      },
    ],
  });

  const forceLoading = normalizedQuery.length > 0 && isDebouncing;

  const groups: readonly SearchResultGroup[] = [
    toGroup('products', 'Products', productsQuery, forceLoading),
    toGroup('knowledge-articles', 'Knowledge articles', articlesQuery, forceLoading),
    toGroup('support-tickets', 'Support tickets', ticketsQuery, forceLoading),
  ];

  const isSettled =
    normalizedQuery.length > 0 &&
    !isDebouncing &&
    [productsQuery, articlesQuery, ticketsQuery].every((result) => !result.isPending && !result.isFetching);

  return {
    groups,
    isSettled,
  };
}
