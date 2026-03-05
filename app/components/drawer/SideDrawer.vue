<script setup lang="ts">
import {
  computed,
  onBeforeUnmount,
  onMounted,
  ref,
  watch,
  nextTick,
} from "vue";

type Side = "left" | "right";

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    side?: Side;
    width?: string;
    overlay?: boolean;
    closeOnOverlay?: boolean;
    closeOnEsc?: boolean;
    lockScroll?: boolean;
    zIndex?: number;

    /**
     * Accessibility/UX improvements
     */
    autofocusPanel?: boolean; // focus the panel on open
    trapFocus?: boolean; // keep Tab inside the panel while open
    restoreFocus?: boolean; // return focus to opener on close
  }>(),
  {
    side: "right",
    width: "min(92vw, 460px)",
    overlay: true,
    closeOnOverlay: true,
    closeOnEsc: true,
    lockScroll: true,
    zIndex: 50,

    autofocusPanel: true,
    trapFocus: true,
    restoreFocus: true,
  },
);

const emit = defineEmits<{
  (e: "update:modelValue", v: boolean): void;
  (e: "open"): void;
  (e: "close"): void;
}>();

const isOpen = computed(() => props.modelValue);

const close = () => emit("update:modelValue", false);
const open = () => emit("update:modelValue", true);

const rootRef = ref<HTMLElement | null>(null);
const panelRef = ref<HTMLElement | null>(null);

let lastActiveEl: Element | null = null;

const lock = () => {
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
};

const unlock = () => {
  document.documentElement.style.overflow = "";
  document.body.style.overflow = "";
};

const onOverlayClick = () => {
  if (props.closeOnOverlay) close();
};

const sideClass = computed(() =>
  props.side === "left" ? "drawer--left" : "drawer--right",
);

const stateClass = computed(() => (isOpen.value ? "isOpen" : "isClosed"));

const drawerStyle = computed(() => ({
  "--drawer-width": props.width,
  zIndex: props.zIndex,
}));

function getFocusable(container: HTMLElement) {
  const selector = [
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    '[tabindex]:not([tabindex="-1"])',
  ].join(",");

  return Array.from(container.querySelectorAll<HTMLElement>(selector)).filter(
    (el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden"),
  );
}

const onKeydown = (e: KeyboardEvent) => {
  if (!isOpen.value) return;

  // ESC closes
  if (props.closeOnEsc && e.key === "Escape") {
    e.preventDefault();
    close();
    return;
  }

  // Focus trap
  if (!props.trapFocus) return;
  if (e.key !== "Tab") return;

  const panel = panelRef.value;
  if (!panel) return;

  const focusable = getFocusable(panel);
  if (focusable.length === 0) {
    // keep focus on panel itself
    e.preventDefault();
    panel.focus();
    return;
  }

  const first = focusable[0]!;
  const last = focusable[focusable.length - 1]!;
  const active = document.activeElement as HTMLElement | null;

  // If focus is outside the panel, pull it in
  if (active && !panel.contains(active)) {
    e.preventDefault();
    first.focus();
    return;
  }

  if (e.shiftKey) {
    if (active === first || active === panel) {
      e.preventDefault();
      last.focus();
    }
  } else {
    if (active === last) {
      e.preventDefault();
      first.focus();
    }
  }
};

async function handleOpen() {
  emit("open");

  lastActiveEl = document.activeElement;

  window.addEventListener("keydown", onKeydown);
  if (props.lockScroll) lock();

  if (props.autofocusPanel) {
    await nextTick();
    // focus first focusable, else focus panel
    const panel = panelRef.value;
    if (!panel) return;

    const focusable = getFocusable(panel);
    (focusable[0] ?? panel).focus();
  }
}

function handleClose() {
  emit("close");

  window.removeEventListener("keydown", onKeydown);
  if (props.lockScroll) unlock();

  if (props.restoreFocus && lastActiveEl instanceof HTMLElement) {
    // return focus to the element that opened the drawer
    lastActiveEl.focus();
  }
  lastActiveEl = null;
}

watch(
  isOpen,
  (v) => {
    if (v) handleOpen();
    else handleClose();
  },
  { immediate: true },
);

onMounted(() => {
  // Just in case we mount open=true
  if (isOpen.value) {
    // already handled by watch(immediate), but harmless
  }
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", onKeydown);
  unlock();
});
</script>

<template>
  <Teleport to="body">
    <!-- Keep root mounted; pointer-events handled via CSS -->
    <div
      ref="rootRef"
      class="drawerRoot"
      :class="{ isOpen: isOpen }"
      :style="drawerStyle"
      :aria-hidden="!isOpen"
    >
      <!-- Overlay -->
      <div v-show="overlay && isOpen" class="drawerOverlayWrap">
        <button
          class="drawerOverlay"
          type="button"
          aria-label="Close drawer"
          @click="onOverlayClick"
        />
      </div>

      <!-- Panel (kept mounted; we animate via classes, not transition selectors) -->
      <aside
        ref="panelRef"
        class="drawerPanel"
        :class="[sideClass, stateClass]"
        role="dialog"
        aria-modal="true"
        tabindex="-1"
        v-show="true"
      >
        <header v-if="$slots.header" class="drawerHeader">
          <slot name="header" :close="close" :open="open" />
        </header>

        <div class="drawerBody">
          <slot :close="close" :open="open" />
        </div>

        <footer v-if="$slots.footer" class="drawerFooter">
          <slot name="footer" :close="close" :open="open" />
        </footer>
      </aside>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.drawerRoot {
  position: fixed;
  inset: 0;
  z-index: var(--z, 60);
  pointer-events: none;

  /* only interactive when open */
  &.isOpen {
    pointer-events: auto;
  }

  /* (optional) fade overlay when closed; overlay is v-show so this is mostly cosmetic */
  &:not(.isOpen) .drawerOverlay {
    opacity: 0;
  }

  .drawerOverlayWrap {
    position: absolute;
    inset: 0;

    .drawerOverlay {
      position: absolute;
      inset: 0;
      border: 0;
      padding: 0;
      cursor: pointer;
      background: rgba(0, 0, 0, 0.45);
      opacity: 1;
      transition: opacity 180ms ease;
    }
  }

  .drawerPanel {
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--drawer-width);
    max-width: 100%;
    background: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);

    /* animation lives here, not in Transition selectors */
    transition: transform 220ms ease;
    transform: translateX(0);

    &.drawer--right {
      right: 0;
    }

    &.drawer--left {
      left: 0;
    }

    /* State classes = no spaghetti selectors */
    &.drawer--right.isClosed {
      transform: translateX(100%);
    }

    &.drawer--left.isClosed {
      transform: translateX(-100%);
    }

    .drawerBody {
      padding: 16px;
      overflow: auto;
      flex: 1;
    }

    .drawerHeader,
    .drawerFooter {
      padding: 16px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    }

    .drawerFooter {
      border-bottom: 0;
      border-top: 1px solid rgba(0, 0, 0, 0.08);
    }
  }
}
</style>
