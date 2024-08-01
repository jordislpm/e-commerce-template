"use client"
import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


function TanstackProvider({children}:{children: React.ReactNode}) {

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
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
  )
}

export default TanstackProvider