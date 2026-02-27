<template>
  <div class="footerCountryWrapper">
    <div class="countryContent">
      <p>Country seletor</p>
    </div>
    <div class="bannerContent">
      <div
        style="
          background-color: black;
          color: black;
          height: 56px;
          width: 138px;
        "
      >
        Student Perks
      </div>
      <div
        style="
          background-color: black;
          color: black;
          height: 56px;
          width: 360px;
        "
      >
        OSI
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footerCountryWrapper {
  display: flex;
  align-items: center;

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
