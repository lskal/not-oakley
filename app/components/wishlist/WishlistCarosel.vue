<template>
  <div class="wishlistCaroselWrapper">
    <slot></slot>
    <div class="carosel">
      <div class="caroselItem">
        <NuxtImg src="https://picsum.photos/1001" alt="image" />
        <NuxtLink to="/product/Holbrook">
          <p>Holbrook™</p>
          <p>$184.00</p>
          <p>Prescription Available</p>
        </NuxtLink>
      </div>
      <div class="caroselItem">
        <NuxtImg src="https://picsum.photos/1002" alt="image" />
        <NuxtLink to="/product/Radar-EV-Path">
          <p>Radar® EV Path®</p>
          <p>$244.00</p>
          <p>Prescription Available</p>
        </NuxtLink>
      </div>
      <div class="caroselItem">
        <NuxtImg src="https://picsum.photos/1003" alt="image" />
        <NuxtLink to="/product/Sutro">
          <p>Sutro</p>
          <p>$203.00</p>
        </NuxtLink>
      </div>
      <div class="caroselItem">
        <NuxtImg src="https://picsum.photos/1004" alt="image" />
        <NuxtLink to="/product/Flak-2-0-XL">
          <p>Flak® 2.0 XL</p>
          <p>$214.00</p>
          <p>Prescription Available</p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.wishlistCaroselWrapper {
  margin-top: 50px;
  margin-bottom: 200px;

  a {
    text-decoration: none;
    color: inherit;
  }

  .carosel {
    display: flex;
    gap: var(--spacing);
    flex-wrap: wrap;
    margin-top: 20px;

    .caroselItem {
      flex: 1 1 20%;
    }
  }
}
</style>
