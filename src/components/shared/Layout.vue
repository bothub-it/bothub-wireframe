<template>
  <div
    :class="{
      layout: true,
      'layout--without-background': withoutBackground,
  }">
    <div
      v-if="loading"
      class="layout__loading">
      <div class="layout__loading__progress" />
    </div>
    <div class="layout__header">
      <div class="bh-grid bh-grid--space-between bh-grid--row">
        <router-link
          class="bh-grid__item layout__header__logo"
          to="/">
          <img
            src="~@/assets/imgs/logo.svg"
            alt="bothub">
        </router-link>
      </div>
    </div>
    <div class="layout__content"><slot /></div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import NewRepositoryModal from '@/components-v1/shared/NewRepositoryModal';
import SiteFooter from '@/components-v1/shared/SiteFooter';
import UserAvatar from '@/components/user/UserAvatar';
import BeginnerTutorial from '@/components/repository/BeginnerTutorial';

const components = {
  NewRepositoryModal,
  SiteFooter,
  UserAvatar,
  BeginnerTutorial,
};

export default {
  name: 'Layout',
  components,
  props: {
    title: {
      type: String,
      default: 'Bothub',
    },
    withoutBackground: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      newRepositoryModalOpen: false,
      beginnerTutorialModalOpen: false,
    };
  },
  computed: {
    ...mapGetters([
      'authenticated',
      'myProfile',
    ]),
  },
  watch: {
    title() {
      document.title = this.title;
    },
  },
  mounted() {
    document.title = this.title;
    this.updateMyProfile('user');
  },
  methods: {
    ...mapActions([
      'updateMyProfile',
      'logout',
      'openLoginModal',
    ]),
    openNewRepositoryModal() {
      this.newRepositoryModalOpen = true;
    },
    closeNewRepositoryModal() {
      this.newRepositoryModalOpen = false;
    },
    openMyProfile() {
      this.$router.push({ name: 'myProfile' });
    },
    openBeginnerTutorialModal() {
      this.beginnerTutorialModalOpen = true;
    },
    signUp() {
      this.$router.push({
        name: 'signUp',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bh/src/assets/scss/colors.scss';
@import '~bh/src/assets/scss/variables.scss';
@import '~@/assets/scss/utilities.scss';


@keyframes layout-loading-progress {
  1% {
    width: 40%
  }
  2% {
    width: 70%;
  }
  10% {
    width: 80%;
  }
  50% {
    width: 90%;
  }
  100% {
    width: 100%;
  }
}

.layout {
  $loading-height: .3rem;

  &__loading {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: $loading-height;
    background-color: white;;
    background-color: rgba($primary, .25);
    overflow: hidden;

    &__progress {
      display: block;
      height: $loading-height;
      width: 20%;
      background-color: $primary;
      animation-name: layout-loading-progress;
      animation-duration: 30s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
  }

  &__header {
    padding: $loading-height 1rem;
    background-color: white;
    border-bottom: 1px solid #CFD5D9;

    &__logo {
      min-width: ($size-normal * .75);
      padding: ($size-normal * .125) 0;

      img {
        display: block;
        height: 1.75rem;
      }
    }

    &__options {
      align-items: center;
    }

    &__icon-tutorial {
      color: $color-white;
      margin: 0;

      &--center {
        align-self: center;
      }

      &:hover {
        color: $color-fake-white;
      }
    }

    &__center {
      width: 50%;
    }
  }

  &__content {
    // min-height: calc(100vh - 3.75rem);
  }
}
</style>
