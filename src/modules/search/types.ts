export type SearchResultState = 'results' | 'empty' | 'loading' | 'error'

export interface SearchResultGroup {
  id: string
  label: string
  state: SearchResultState
  results: readonly string[]
}
