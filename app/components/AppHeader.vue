<script setup>
import IconHeader from "./IconHeader.vue";
</script>

<template>
  <div class="headerWrapper">
    <div class="subcontent">promo value here (insert carosel here)</div>
    <div class="headerMain">
      <div class="left">
        <button
          class="logoWrapper"
          aria-label="logo"
          @click="$router.push('/')"
        >
          <NuxtImg class="logoWebsite" src="/logo.svg" alt="logo" />
        </button>

        <IconHeader
          heightIcon="30"
          icon="solar:hamburger-menu-outline"
          iconHover="solar:hamburger-menu-bold-duotone"
          label="menu"
        />

        <div>Sunglasses</div>
        <div>Prescription</div>
        <div>Apparel</div>
      </div>

      <div class="right">
        <IconHeader
          heightIcon="30"
          icon="solar:map-point-favourite-broken"
          iconHover="solar:map-point-favourite-bold-duotone"
          label="favourites"
        />

        <IconHeader
          heightIcon="30"
          icon="solar:map-point-search-broken"
          iconHover="solar:map-point-search-bold-duotone"
          label="search"
        />

        <IconHeader
          heightIcon="30"
          icon="solar:user-broken"
          iconHover="solar:user-bold-duotone"
          label="profile"
        />

        <IconHeader
          heightIcon="30"
          icon="solar:cart-4-broken"
          iconHover="solar:cart-5-bold-duotone"
          label="cart"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.headerWrapper {
  margin-bottom: 50px;
  width: 100%;

  .subcontent {
    text-align: center;
    background-color: var(--color-accent);
  }

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

    .left {
      align-items: center;
      justify-content: start;

      .logoWrapper {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        border: 0;
        background: transparent;
        cursor: pointer;

        &:hover,
        &:focus,
        &:active {
          background: gray;
          border-radius: 5px;
        }

        .logoWebsite {
          height: 30px;
          width: auto;
          padding: 5px;
        }
      }
    }

    .right {
      align-items: center;
      justify-content: end;
    }
  }
}
</style>
