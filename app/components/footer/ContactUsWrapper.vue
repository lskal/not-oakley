<script setup lang="ts">
import CustomIcon from "../buttons/CustomIcon.vue";
</script>

<template>
  <div class="contactUsWrapper">
    <b> We're Here To Help: </b>
    <ul class="listIcons">
      <li class="iconFooter">
        <CustomIcon
          icon="carbon:question-answering"
          link="#"
          heightIcon="40"
          bgColor="lightgray"
        />
        FAQ's
      </li>
      <li class="iconFooter">
        <CustomIcon
          icon="carbon:chat"
          link="#"
          heightIcon="40"
          bgColor="lightgray"
        />
        Chat with us
      </li>
      <li class="iconFooter">
        <CustomIcon
          icon="carbon:email"
          link="#"
          heightIcon="40"
          bgColor="lightgray"
        />
        Email us
      </li>
      <li class="iconFooter">
        <CustomIcon
          icon="carbon:delivery-parcel"
          link="#"
          heightIcon="40"
          bgColor="lightgray"
        />
        Order status
      </li>
      <li class="iconFooter">
        <CustomIcon
          icon="carbon:delivery"
          link="#"
          heightIcon="40"
          bgColor="lightgray"
        />
        Shipping & returns policy
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.contactUsWrapper {
  width: 25%;
  height: 100%;
  background-color: white;
  padding: 20px 40px;

  .listIcons {
    padding-inline-start: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .iconFooter {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
}
</style>
