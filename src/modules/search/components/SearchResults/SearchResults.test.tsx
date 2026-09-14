import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it } from 'vitest'
import SearchResults from './SearchResults'

afterEach(cleanup)

describe('SearchResults', () => {
  it('keeps each source group visible for its own state', () => {
    render(
      <SearchResults
        query="VPN"
        groups={[
          { id: 'products', label: 'Products', state: 'loading', results: [] },
          { id: 'knowledge', label: 'Knowledge articles', state: 'empty', results: [] },
          { id: 'tickets', label: 'Support tickets', state: 'error', results: [] },
        ]}
      />,
    )

    expect(screen.getByRole('heading', { name: 'Products' })).toBeTruthy()
    expect(screen.getByText('Loading results…')).toBeTruthy()
    expect(screen.getByRole('heading', { name: 'Knowledge articles' })).toBeTruthy()
    expect(screen.getByText('No results from this source.')).toBeTruthy()
    expect(screen.getByRole('heading', { name: 'Support tickets' })).toBeTruthy()
    expect(screen.getByText('Unable to load results from this source.')).toBeTruthy()
  })
})
