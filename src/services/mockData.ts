export interface Customer {
  firstName: string;
  lastName: string;
  portalRole: string;
  organization: string;
  accountType: string;
  accountNumber: string;
  accountStatus: string;
}

export interface ServiceTicket {
  id: string;
  subject: string;
  status: ServiceTicketStatus;
  priority: ServiceTicketPriority;
  updated: string;
}

export interface RecentOrder {
  id: string;
  summary: string;
  shipmentStatus: ShipmentStatus;
  total: string;
  date: string;
  dateTime: string;
}

export interface NotificationItem {
  id: string;
  text: string;
  unread: boolean;
}

export type ServiceTicketStatus = 'Processing' | 'Waiting approval' | 'Resolved';
export type ServiceTicketPriority = 'High' | 'Medium' | 'Low';
export type ShipmentStatus = 'Processing' | 'Shipped' | 'Delayed' | 'Delivered';

export interface SearchResult {
  id: string;
  title: string;
}

export const customer: Readonly<Customer> = {
  firstName: 'Jordan',
  lastName: 'Smith',
  portalRole: 'IT service manager',
  organization: 'Northstar Logistics',
  accountType: 'Enterprise account',
  accountNumber: 'NL-004182',
  accountStatus: 'Active',
};

export const tickets: readonly ServiceTicket[] = [
  {
    id: 'INC-24081',
    subject: 'Intermittent VPN connection and firewall policy issues',
    status: 'Processing',
    priority: 'High',
    updated: '12 min ago',
  },
  {
    id: 'REQ-19803',
    subject: 'New employee workstation',
    status: 'Waiting approval',
    priority: 'Medium',
    updated: '2 days ago',
  },
  {
    id: 'INC-23976',
    subject: 'Email access issue',
    status: 'Resolved',
    priority: 'Low',
    updated: '5 days ago',
  },
];

export const orders: readonly RecentOrder[] = [
  {
    id: 'ORD-10492',
    summary: '12 laptops and docking stations',
    shipmentStatus: 'Processing',
    total: '€18,240.00',
    date: 'Sep 6, 2026',
    dateTime: '2026-09-06',
  },
  {
    id: 'ORD-10457',
    summary: '24 office monitors',
    shipmentStatus: 'Shipped',
    total: '€6,720.00',
    date: 'Sep 5, 2026',
    dateTime: '2026-09-05',
  },
  {
    id: 'ORD-10398',
    summary: 'Network equipment',
    shipmentStatus: 'Delayed',
    total: '€8,910.00',
    date: 'Aug 24, 2026',
    dateTime: '2026-08-24',
  },
  {
    id: 'ORD-10371',
    summary: 'Mobile device accessories',
    shipmentStatus: 'Delivered',
    total: '€3,480.00',
    date: 'Aug 18, 2026',
    dateTime: '2026-08-18',
  },
];

export const notifications: readonly NotificationItem[] = [
  { id: 'ticket-update', text: 'Ticket INC-24081 was updated by the service team', unread: true },
  { id: 'order-dispatched', text: 'Order ORD-10492 has been dispatched', unread: true },
  { id: 'request-approval', text: 'Request REQ-19803 is waiting for approval', unread: false },
  { id: 'request-detail', text: 'Request REQ-19803 needs additional details', unread: false },
  { id: 'request-queued', text: 'REQ-19803 is waiting for approval', unread: false },
  { id: 'request-reminder', text: 'A request REQ-19803 is waiting for your review', unread: true },
  { id: 'request-follow-up', text: 'A request is waiting for approval', unread: false },
  { id: 'request-pending', text: 'Request REQ-19803 is waiting for approval', unread: false },
];

export const products: readonly SearchResult[] = [
  { id: 'secure-remote-access-licence', title: 'Secure Remote Access licence' },
  { id: 'vpn-gateway-appliance', title: 'VPN gateway appliance' },
];

export const articles: readonly SearchResult[] = [
  { id: 'managed-device-vpn', title: 'Set up VPN access on a managed device' },
  { id: 'intermittent-vpn', title: 'Troubleshoot intermittent VPN connections' },
];

export const supportTickets: readonly SearchResult[] = [
  { id: 'INC-24081', title: 'INC-24081 — Intermittent VPN connection and firewall issues' },
  { id: 'INC-23910', title: 'INC-23910 — VPN access for a new employee' },
];
