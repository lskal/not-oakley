<script setup lang="ts">
import CustomCta from "../buttons/CustomCta.vue";
import IconHeader from "../buttons/IconHeader.vue";
</script>

<template>
  <div class="footerContainer">
    <div class="footerWrapper">
      <div class="footerNews">
        <div class="newsletterWrapper">
          <p class="newsletterCall">Join our community and stay up to date:</p>
          <div class="inputEmailWrapper">
            <input type="email" placeholder="Enter your email" />
            <CustomCta
              textValue="Sign Up"
              :isUppercase="true"
              link="#"
              padding="0 50px"
            />
          </div>
        </div>
        <div class="socialWrapper">
          <p>Follow us:</p>
          <div class="socialIconsWrapper">
            <IconHeader
              heightIcon="40"
              icon="entypo-social:facebook-with-circle"
              iconHover="entypo-social:facebook-with-circle"
              iconActive="entypo-social:facebook-with-circle"
              link="#"
              label="icon"
            />
            <IconHeader
              heightIcon="40"
              icon="entypo-social:instagram-with-circle"
              iconHover="entypo-social:instagram-with-circle"
              iconActive="entypo-social:instagram-with-circle"
              link="#"
              label="icon"
            />
            <IconHeader
              heightIcon="40"
              icon="entypo-social:twitter-with-circle"
              iconHover="entypo-social:twitter-with-circle"
              iconActive="entypo-social:twitter-with-circle"
              link="#"
              label="icon"
            />
            <IconHeader
              heightIcon="40"
              icon="entypo-social:youtube-with-circle"
              iconHover="entypo-social:youtube-with-circle"
              iconActive="entypo-social:youtube-with-circle"
              link="#"
              label="icon"
            />
            <IconHeader
              heightIcon="40"
              icon="entypo-social:500px-with-circle"
              iconHover="entypo-social:500px-with-circle"
              iconActive="entypo-social:500px-with-circle"
              link="#"
              label="icon"
            />
          </div>
        </div>
      </div>
      <div class="footerLinksRow">footerLinksRow</div>
      <div class="footerCountry">footerCountry</div>
      <div class="legalLinksRow">legalLinksRow</div>
      <div class="copyrightRow">copyrightRow</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
* {
  border: 1px solid tomato;
}

.footerContainer {
  padding-left: var(--page-gutter);
  padding-right: var(--page-gutter);
  background-color: var(--color-background-secondary);

  .footerWrapper {
    .footerNews {
      display: flex;
      justify-content: space-between;

      .newsletterWrapper {
        width: 75%;

        .newsletterCall {
          padding-bottom: 18px;
        }
        .inputEmailWrapper {
          display: flex;
          gap: 20px;
        }
      }
      .socialWrapper {
        width: 25%;

        .socialIconsWrapper {
          display: flex;
          gap: 20px;
          margin-top: 30px;
        }
      }
    }
  }
}
</style>
