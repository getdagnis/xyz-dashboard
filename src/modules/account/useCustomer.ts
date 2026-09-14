import { useQuery } from '@tanstack/react-query';
import { getCustomer } from '../../services/customerService';

export function useCustomer() {
  return useQuery({
    queryKey: ['customer'],
    queryFn: ({ signal }) => getCustomer(signal),
  });
}
