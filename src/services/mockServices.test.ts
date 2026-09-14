import { afterEach, describe, expect, it, vi } from 'vitest'
import { getCustomer } from './customerService'
import { searchArticles } from './search/knowledgeArticleSearchService'
import { searchProducts } from './search/productSearchService'
import { searchTickets } from './search/supportTicketSearchService'

describe('mock services', () => {
  it('returns VPN results from every search source', async () => {
    vi.useFakeTimers()
    const results = Promise.all([
      searchProducts('VPN'),
      searchArticles('VPN'),
      searchTickets('VPN'),
    ])
    await vi.runAllTimersAsync()
    const [products, articles, tickets] = await results

    expect(products.length).toBeGreaterThan(0)
    expect(articles.length).toBeGreaterThan(0)
    expect(tickets.length).toBeGreaterThan(0)
  })

  it('returns no results for an empty query', async () => {
    vi.useFakeTimers()
    const resultPromise = Promise.all([
      searchProducts('   '),
      searchArticles('   '),
      searchTickets('   '),
    ])
    await vi.runAllTimersAsync()
    const results = await resultPromise

    expect(results).toEqual([[], [], []])
  })

  it('rejects an aborted request with an AbortError', async () => {
    const controller = new AbortController()
    const request = getCustomer(controller.signal)

    controller.abort()

    await expect(request).rejects.toMatchObject({ name: 'AbortError' })
  })
})

afterEach(() => vi.useRealTimers())
