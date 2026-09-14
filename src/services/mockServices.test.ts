import { describe, expect, it } from 'vitest'
import { getCustomer } from './customerService'
import { searchArticles } from './search/knowledgeArticleSearchService'
import { searchProducts } from './search/productSearchService'
import { searchTickets } from './search/supportTicketSearchService'

describe('mock services', () => {
  it('returns VPN results from every search source', async () => {
    const [products, articles, tickets] = await Promise.all([
      searchProducts('VPN'),
      searchArticles('VPN'),
      searchTickets('VPN'),
    ])

    expect(products.length).toBeGreaterThan(0)
    expect(articles.length).toBeGreaterThan(0)
    expect(tickets.length).toBeGreaterThan(0)
  })

  it('rejects an aborted request with an AbortError', async () => {
    const controller = new AbortController()
    const request = getCustomer(controller.signal)

    controller.abort()

    await expect(request).rejects.toMatchObject({ name: 'AbortError' })
  })
})
