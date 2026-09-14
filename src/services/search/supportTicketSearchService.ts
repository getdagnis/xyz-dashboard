import { delayed } from '../delay'
import { supportTickets } from '../mockData'
import type { SearchResult } from '../mockData'

export function searchTickets(query: string, signal?: AbortSignal): Promise<readonly SearchResult[]> {
  const normalizedQuery = query.trim().toLocaleLowerCase()
  return delayed(
    () => supportTickets
      .filter((ticket) => ticket.id.toLocaleLowerCase().includes(normalizedQuery)
        || ticket.title.toLocaleLowerCase().includes(normalizedQuery))
      .map((ticket) => ({ ...ticket })),
    signal,
  )
}
