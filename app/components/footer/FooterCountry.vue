<template>
  <div class="footerCountryWrapper">
    <div class="countryContent">
      <p>Country seletor</p>
    </div>
    <div class="bannerContent">
      <div>logo 1</div>
      <div>logo 2</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footerCountryWrapper {
  display: flex;

  .countryContent {
    width: 25%;
  }

  .bannerContent {
    display: flex;
    width: 75%;
    gap: 20px;
    justify-content: end;
  }
}
</style>
