export interface NotificationItem {
  id: string
  text: string
  unread: boolean
}

export const notifications: NotificationItem[] = [
  { id: 'ticket-update', text: 'Ticket INC-24081 was updated by the service team', unread: true },
  { id: 'order-dispatched', text: 'Order ORD-10492 has been dispatched', unread: true },
  { id: 'request-approval', text: 'Request REQ-19803 is waiting for approval', unread: false },
  { id: 'request-detail', text: 'Request REQ-19803 needs additional details', unread: false },
  { id: 'request-queued', text: 'REQ-19803 is waiting for approval', unread: false },
  { id: 'request-reminder', text: 'A request REQ-19803 is waiting for your review', unread: true },
  { id: 'request-follow-up', text: 'A request is waiting for approval', unread: false },
  { id: 'request-pending', text: 'Request REQ-19803 is waiting for approval', unread: false },
]
