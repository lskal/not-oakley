// ~/composables/useBreakpoint.ts
import { ref, onMounted, onBeforeUnmount, computed } from "vue";

type Options = {
  minWidth?: number;
  maxWidth?: number; // default used only when minWidth is NOT set
};

export function useBreakpoint(options: Options = {}) {
  const minWidth = options.minWidth;

  const maxWidth =
    typeof options.maxWidth === "number"
      ? options.maxWidth
      : typeof minWidth === "number"
        ? undefined
        : 1199;

  const isMatch = ref(false);

  const mediaQuery = computed(() => {
    const rules: string[] = [];
    if (typeof minWidth === "number") rules.push(`(min-width: ${minWidth}px)`);
    if (typeof maxWidth === "number") rules.push(`(max-width: ${maxWidth}px)`);
    return rules.join(" and ");
  });

  let mediaWatcher: MediaQueryList | null = null;

  const update = () => {
    if (!mediaWatcher) return;
    isMatch.value = mediaWatcher.matches;
  };

  const subscribe = () => {
    if (!import.meta.client) return;

    const query = mediaQuery.value;
    if (!query) {
      isMatch.value = false;
      return;
    }

    mediaWatcher = window.matchMedia(query);
    update();

    mediaWatcher.addEventListener?.("change", update);
    // legacy Safari fallback (only used if needed)
    mediaWatcher.addListener?.(update as any);
  };

  const unsubscribe = () => {
    if (!mediaWatcher) return;

    mediaWatcher.removeEventListener?.("change", update);
    // legacy Safari fallback (only used if needed)
    mediaWatcher.removeListener?.(update as any);

    mediaWatcher = null;
  };

  onMounted(subscribe);
  onBeforeUnmount(unsubscribe);

  return isMatch;
}
