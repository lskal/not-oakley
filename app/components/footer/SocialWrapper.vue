<script setup lang="ts">
import CustomIcon from "../buttons/CustomIcon.vue";
</script>

<template>
  <div class="socialWrapper">
    <p>Follow us:</p>
    <div class="socialIconsWrapper">
      <CustomIcon
        heightIcon="40"
        icon="entypo-social:facebook-with-circle"
        link="#"
        label="icon"
      />
      <CustomIcon
        heightIcon="40"
        icon="entypo-social:instagram-with-circle"
        link="#"
        label="icon"
        bgColor="black"
        iconColor="white"
      />
      <CustomIcon
        heightIcon="40"
        icon="entypo-social:twitter-with-circle"
        link="#"
        label="icon"
      />
      <CustomIcon
        heightIcon="40"
        icon="entypo-social:youtube-with-circle"
        link="#"
        label="icon"
      />
      <CustomIcon
        heightIcon="40"
        icon="entypo-social:500px-with-circle"
        link="#"
        label="icon"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.socialWrapper {
  width: 25%;

  .socialIconsWrapper {
    display: flex;
    gap: 20px;
    margin-top: 30px;
  }
}
</style>
