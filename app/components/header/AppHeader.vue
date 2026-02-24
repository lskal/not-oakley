<script setup>
import IconHeader from "./IconHeader.vue";
import { useIsActivePath } from "~/composables/useIsActivePath";
const { isActivePath } = useIsActivePath();
const isDesktop = useBreakpoint({ minWidth: 1200 });
</script>

<template>
  <div class="headerContainer">
    <div class="subcontent">promo value here (insert carosel here)</div>
    <div class="headerMain">
      <div class="left">
        <NuxtLink class="logoWrapper" to="/" aria-label="Home">
          <NuxtImg class="logoWebsite" src="/logo.svg" alt="logo" />
        </NuxtLink>

        <IconHeader
          heightIcon="30"
          icon="solar:hamburger-menu-outline"
          iconHover="solar:hamburger-menu-bold-duotone"
          iconActive="solar:hamburger-menu-bold-duotone"
          label="menu"
          preventClick
          v-if="isDesktop"
        />

        <NuxtLink
          :class="{
            categoryLink: true,
            activePage: isActivePath('/category/sunglasses'),
          }"
          to="/category/sunglasses"
          v-if="isDesktop"
          >Sunglasses</NuxtLink
        >
        <NuxtLink
          :class="{
            categoryLink: true,
            activePage: isActivePath('/category/prescription'),
          }"
          to="/category/prescription"
          v-if="isDesktop"
          >Prescription</NuxtLink
        >
        <NuxtLink
          :class="{
            categoryLink: true,
            activePage: isActivePath('/category/apparel'),
          }"
          to="/category/apparel"
          v-if="isDesktop"
          >Apparel</NuxtLink
        >
      </div>

      <div class="right">
        <IconHeader
          heightIcon="30"
          icon="solar:map-point-favourite-broken"
          iconHover="solar:map-point-favourite-bold-duotone"
          iconActive="solar:map-point-favourite-bold"
          link="/favourites"
          label="favourites"
        />

        <IconHeader
          heightIcon="30"
          icon="solar:map-point-search-broken"
          iconHover="solar:map-point-search-bold-duotone"
          iconActive="solar:map-point-search-bold"
          label="search"
          link="/search"
          preventClick
        />

        <IconHeader
          heightIcon="30"
          icon="solar:user-broken"
          iconHover="solar:user-bold-duotone"
          iconActive="solar:user-bold"
          label="profile"
          link="/profile"
          preventClick
        />

        <IconHeader
          heightIcon="30"
          icon="solar:cart-5-broken"
          iconHover="solar:cart-5-bold-duotone"
          iconActive="solar:cart-5-bold"
          label="cart"
          link="/cart"
          preventClick
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.headerContainer {
  width: 100%;

  // subcontent
  .subcontent {
    text-align: center;
    background-color: var(--color-background-secondary);
  }

  // main header
  .headerMain {
    width: 100%;
    display: flex;
    justify-content: space-between;

    padding: 10px var(--page-gutter);

    .left,
    .right {
      display: flex;
      gap: 30px;
    }

    // left side
    .left {
      align-items: center;
      justify-content: start;

      .logoWrapper {
        .logoWebsite {
          height: 30px;
          width: auto;
          padding: 5px;
        }
      }

      // left side NuxtLink with active and hover states
      .categoryLink,
      .logoWrapper {
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        background: transparent;
      }

      .categoryLink {
        &:hover,
        &.activePage {
          text-decoration: underline;
        }

        &.activePage {
          font-weight: bold;
        }
      }

      .logoWrapper {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        border: 0;

        &:hover,
        &:focus {
          background: gray;
          border-radius: 5px;
        }
      }
    }

    // right side
    .right {
      align-items: center;
      justify-content: end;
    }
  }
}
</style>
