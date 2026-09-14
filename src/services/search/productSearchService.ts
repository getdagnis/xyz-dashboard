import { delayed } from '../delay'
import { products } from '../mockData'
import type { SearchResult } from '../mockData'

export function searchProducts(query: string, signal?: AbortSignal): Promise<readonly SearchResult[]> {
  const normalizedQuery = query.trim().toLocaleLowerCase()
  return delayed(
    () => normalizedQuery.length === 0
      ? []
      : products
        .filter((product) => product.id.toLocaleLowerCase().includes(normalizedQuery)
          || product.title.toLocaleLowerCase().includes(normalizedQuery))
        .map((product) => ({ ...product })),
    signal,
  )
}
