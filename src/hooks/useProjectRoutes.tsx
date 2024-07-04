import { useMemo } from 'react';
import { RoutesNav } from '@/contast';

export const useProjectRoutes = () => {
  const projectRoutes = useMemo(() => RoutesNav, []);
  return {projectRoutes};
};