import { notifications } from './mockData'
import type { NotificationItem } from './mockData'
import { delayed } from './delay'

export function getNotifications(signal?: AbortSignal): Promise<readonly NotificationItem[]> {
  return delayed(() => notifications.map((notification) => ({ ...notification })), signal)
}
