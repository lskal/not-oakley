export const useIsActivePath = () => {
  const route = useRoute();

  const isActivePath = (target: string, options?: { exact?: boolean }) => {
    if (!target) return false;

    if (options?.exact) {
      return route.path === target;
    }

    return route.path.startsWith(target);
  };

  return { isActivePath };
};
