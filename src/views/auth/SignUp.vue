<template>
  <div class="sign-up">
    <nav class="sign-up__nav">
      <div class="bh-grid bh-grid--space-between bh-grid--row">
        <router-link
          class="bh-grid__item sign-up__nav__logo"
          to="/">
          <img
            src="@/assets/imgs/logo.svg"
            alt="Bothub">
        </router-link>
        <div class="sign-up__nav__login">
          <span class="sign-up__nav__text">Already have an account?</span>
          <bh-button
            class="sign-up__nav__login__button"
            primary
            size="normal"
            @click="openLoginModal()">Sign in</bh-button>
        </div>
      </div>
    </nav>
    <section class="bh-grid bh-grid--half sign-up__wrapper-content">
      <div class="bh-grid__item sign-up__wrapper-content__image">
        <img
          src="@/assets/imgs/computer-bot.png"
          alt="avatar" >
      </div>
      <div class="bh-grid__item sign-up__wrapper-content__form">
        <div class="sign-up__wrapper-content__form__title">
          <h1>Get started free</h1>
        </div>
        <form @submit.prevent="onSubmit">
          <loading v-if="!formSchema" />
          <form-generator
            v-if="formSchema"
            :schema="formSchema"
            v-model="data"
            :errors="errors"
            class="field" />
          <div class="field">
            <div class="control has-text-centered">
              <bh-button
                :disabled="submitting"
                type="submit"
                full-width
                color="info">Get free</bh-button>
            </div>
            <div class="sign-up__wrapper-content__form__agree-message">
              <small>
                By clicking “Continue” I agree to InVision’s Terms of Service and Privacy Policy.
              </small>
            </div>
          </div>
        </form>
      </div>
    </section>
    <site-footer class="sign-up__footer" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import FormGenerator from '@/components-v1/form-generator/FormGenerator';
import Loading from '@/components-v1/shared/Loading';
import SiteFooter from '@/components-v1/shared/SiteFooter';

const components = {
  FormGenerator,
  Loading,
  SiteFooter,
};


export default {
  name: 'SignUp',
  components,
  data() {
    return {
      formSchema: null,
      data: {},
      submitting: false,
      errors: {},
    };
  },
  computed: {
    ...mapGetters([
      'authenticated',
    ]),
  },
  watch: {
    authenticated() {
      this.$router.push({
        name: 'home',
      });
    },
  },
  async mounted() {
    this.formSchema = await this.getRegisterSchema();
  },
  methods: {
    ...mapActions([
      'openLoginModal',
      'register',
      'getRegisterSchema',
      'login',
    ]),
    async onSubmit() {
      this.submitting = true;
      this.errors = {};

      try {
        await this.register(this.data);
        this.loginUser();
        return true;
      } catch (error) {
        const data = error.response && error.response.data;
        if (data) {
          this.errors = data;
        }
        this.submitting = false;
      }

      return false;
    },
    async loginUser() {
      const userData = {
        username: this.data.email,
        password: this.data.password,
      };

      try {
        await this.login(userData);
        this.$emit('authenticated');
        return true;
      } catch (error) {
        this.openLoginModal();
        this.submitting = false;
      }

      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bh/src/assets/scss/colors.scss';
@import '~bh/src/assets/scss/variables.scss';
@import '~@/assets/scss/utilities.scss';

$width: 1085px;

.sign-up {
  background-color: $color-white;
  $max-width: 1200px;

    &__nav {
      padding: .25rem 1rem;
      background-color: $color-white;

      &__login {
        align-self: center;

        &__button {
          margin: 0 1rem;
        }
      }

      &__text {
        @media screen and (max-width: 500px) {
          display: none;
        }
      }

      &__logo {
        min-width: ($size-normal * .75);
        padding: ($size-normal * .125) 0;
        align-self: center;

        img {
          display: block;
          height: $size-small;
        }
      }
    }

    &__wrapper-content {
      max-width: $max-width;
      margin: 15vh auto;
      position: relative;
      height: 100%;

      &__image {
        max-width: 35rem;
        margin-right: auto;

        @media screen and (max-width: $width) {
          display: none;
        }
      }

      &__form {
        max-width: 30rem;

        @media screen and (max-width: $width) {
          max-width: 100%;
          margin: 3rem;
        }

        &__title {
          position: relative;
          top: -5vh;

          @media screen and (max-width: $width) {
           text-align: center;
          }
        }

        &__agree-message {
          position: relative;
          bottom: -4vh;

          @media screen and (max-width: $width) {
           text-align: center;
          }
        }
      }
    }

    &__footer {
      margin-top: 25rem;
    }

}
</style>
