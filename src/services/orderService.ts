import { orders } from './mockData'
import type { RecentOrder } from './mockData'
import { delayed } from './delay'

export function getOrders(signal?: AbortSignal): Promise<readonly RecentOrder[]> {
  return delayed(() => orders.map((order) => ({ ...order })), signal)
}
