import { notifications } from './mockData'
import type { Notification } from './mockData'
import { delayed } from './delay'

export function getNotifications(signal?: AbortSignal): Promise<readonly Notification[]> {
  return delayed(() => notifications.map((notification) => ({ ...notification })), signal)
}
