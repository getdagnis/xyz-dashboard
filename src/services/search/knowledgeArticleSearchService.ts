import { delayed } from '../delay'
import { articles } from '../mockData'
import type { SearchResult } from '../mockData'

export function searchArticles(query: string, signal?: AbortSignal): Promise<readonly SearchResult[]> {
  const normalizedQuery = query.trim().toLocaleLowerCase()
  return delayed(
    () => articles
      .filter((article) => article.id.toLocaleLowerCase().includes(normalizedQuery)
        || article.title.toLocaleLowerCase().includes(normalizedQuery))
      .map((article) => ({ ...article })),
    signal,
  )
}
