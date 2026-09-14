import type { SearchResultGroup } from '../types'

const vpnResults: readonly SearchResultGroup[] = [
  {
    id: 'products',
    label: 'Products',
    state: 'results',
    results: [
      'Secure Remote Access licence',
      'VPN gateway appliance',
    ],
  },
  {
    id: 'knowledge-articles',
    label: 'Knowledge articles',
    state: 'results',
    results: [
      'Set up VPN access on a managed device',
      'Troubleshoot intermittent VPN connections',
    ],
  },
  {
    id: 'support-tickets',
    label: 'Support tickets',
    state: 'results',
    results: [
      'INC-24081 — Intermittent VPN connection and firewall issues',
      'INC-23910 — VPN access for a new employee',
    ],
  },
]

export function getPreviewSearchGroups(query: string): readonly SearchResultGroup[] {
  return query.toLocaleLowerCase().includes('vpn') ? vpnResults : []
}
