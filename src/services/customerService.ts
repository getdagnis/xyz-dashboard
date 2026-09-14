import { customer } from './mockData'
import type { Customer } from './mockData'
import { delayed } from './delay'

export function getCustomer(signal?: AbortSignal): Promise<Readonly<Customer>> {
  return delayed(() => ({ ...customer }), signal)
}
