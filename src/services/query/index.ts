// lib/queryClient.ts
import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient(
    {
  defaultOptions: {
    queries: {
     refetchOnWindowFocus: true,
      staleTime: 5000,
      gcTime: 1000 * 60 * 10,
      refetchInterval: 60000, // Refetch cada 60 segundos
    },
  },
}
);

export default queryClient;