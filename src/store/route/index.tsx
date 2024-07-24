import { RoutesStateProps} from '@/types';
import create from 'zustand';
import { persist } from 'zustand/middleware';

export const RoutesStore = create<RoutesStateProps>()(
    persist(
      (set) => ({
        routes: [],
        setRoutes: (routes) => set({ routes }),
      }),
      {
        name: 'routes-storage', 
      }
    )
  );