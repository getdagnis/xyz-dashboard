import { tickets } from './mockData'
import type { ServiceTicket } from './mockData'
import { delayed } from './delay'

export function getTickets(signal?: AbortSignal): Promise<readonly ServiceTicket[]> {
  return delayed(() => tickets.map((ticket) => ({ ...ticket })), signal)
}
