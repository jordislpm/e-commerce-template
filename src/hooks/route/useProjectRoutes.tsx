import { RoutesStore } from "@/store/route";

const useRoutesStore = () => {
  const routes = RoutesStore((state) => state.routes);
  const setRoutes = RoutesStore((state) => state.setRoutes);

  return {
    routes,
    setRoutes,
  };
};

export default useRoutesStore;