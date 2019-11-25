<template>
  <div id="app">
    <bh-toast-notification />
    <login-modal
      v-if="loginModalOpen"
      ref="loginModal"
      :current-tab="loginModalTabValue" />
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LoginModal from '@/components-v1/shared/LoginModal';

const components = {
  LoginModal,
};

export default {
  name: 'App',
  components,
  computed: {
    ...mapGetters([
      'loginModalOpen',
      'loginModalTabValue',
    ]),
  },
  mounted() {
    this.safariDetected();
  },
  methods: {
    safariDetected() {
      if (navigator.userAgent.indexOf('Safari') !== -1
      && navigator.userAgent.indexOf('Chrome') === -1) {
        this.$router.push({
          name: 'safari-alert',
        });
      }
    },
  },
};
</script>
<!-- eslint-disable -->
<style lang="scss">
@import '~@/assets/scss/utilities.scss';
@import '~bulma';
@import '~buefy/src/scss/buefy';
@import '~bh/src/assets/scss/bh.scss';
@import '@mdi/font/css/materialdesignicons.css';
@import 'highlight.js/styles/github.css';


.container-padding {
  padding: 0 8px;
}

// based on https://flatuicolors.com/palette/nl
$entities-colors: (
  ('selected', $grey-lighter, black),
  ('sunflower', #FFC312, black),
  ('energos', #C4E538, black),
  ('blue-martina', #12CBC4, black),
  ('lavender-rose', #FDA7DF, black),
  ('bara-red', #ED4C67, white),
  ('radiant-yellow', #F79F1F, white),
  ('android-green', #A3CB38, white),
  ('mediterranean-sea', #1289A7, white),
  ('lavender-tea', #D980FA, black),
  ('very-berry', #B53471, white),
);

@each $entity-color in $entities-colors {
  $name: nth($entity-color, 1);
  $bg: nth($entity-color, 2);
  $color: nth($entity-color, 3);

  .entity-#{$name},
  .entity-#{$name}:not(.body) {
    color: $color;
    background-color: $bg;
  }
}

@keyframes iconSpin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.icon-spin {
  animation-name: iconSpin;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.item {
  margin-bottom: 1rem;
}

.item-1-2 {
  margin-bottom: .5rem;
}

.mh-200 {
  max-height: 200px;
}

.align-items-center {
  align-items: center;
}

#app {
  background-color: white;
}

.v-step[data-v-aa0cbe42]{-webkit-filter:drop-shadow(0 0 2px rgba(0,0,0,.5));background:#50596c;border-radius:3px;color:#fff;filter:drop-shadow(0 0 2px rgba(0,0,0,.5));max-width:320px;padding:1rem;text-align:center}.v-step .v-step__arrow[data-v-aa0cbe42]{border-color:#50596c;border-style:solid;height:0;margin:.5rem;position:absolute;width:0}.v-step .v-step__arrow--dark[data-v-aa0cbe42]{border-color:#454d5d}.v-step[x-placement^=top][data-v-aa0cbe42]{margin-bottom:.5rem}.v-step[x-placement^=top] .v-step__arrow[data-v-aa0cbe42]{border-bottom-color:transparent;border-left-color:transparent;border-right-color:transparent;border-width:.5rem .5rem 0;bottom:-.5rem;left:calc(50% - 1rem);margin-bottom:0;margin-top:0}.v-step[x-placement^=bottom][data-v-aa0cbe42]{margin-top:.5rem}.v-step[x-placement^=bottom] .v-step__arrow[data-v-aa0cbe42]{border-left-color:transparent;border-right-color:transparent;border-top-color:transparent;border-width:0 .5rem .5rem;left:calc(50% - 1rem);margin-bottom:0;margin-top:0;top:-.5rem}.v-step[x-placement^=right][data-v-aa0cbe42]{margin-left:.5rem}.v-step[x-placement^=right] .v-step__arrow[data-v-aa0cbe42]{border-bottom-color:transparent;border-left-color:transparent;border-top-color:transparent;border-width:.5rem .5rem .5rem 0;left:-.5rem;margin-left:0;margin-right:0;top:calc(50% - 1rem)}.v-step[x-placement^=left][data-v-aa0cbe42]{margin-right:.5rem}.v-step[x-placement^=left] .v-step__arrow[data-v-aa0cbe42]{border-bottom-color:transparent;border-right-color:transparent;border-top-color:transparent;border-width:.5rem 0 .5rem .5rem;margin-left:0;margin-right:0;right:-.5rem;top:calc(50% - 1rem)}.v-step__header[data-v-aa0cbe42]{background-color:#454d5d;border-top-left-radius:3px;border-top-right-radius:3px;margin:-1rem -1rem .5rem;padding:.5rem}.v-step__content[data-v-aa0cbe42]{margin:0 0 1rem}.v-step__button[data-v-aa0cbe42]{-webkit-transition:all .2s ease;background:transparent;border:.05rem solid #fff;border-radius:.1rem;color:#fff;cursor:pointer;display:inline-block;font-size:.8rem;height:1.8rem;line-height:1rem;margin:0 .2rem;outline:none;padding:.35rem .4rem;text-align:center;text-decoration:none;transition:all .2s ease;vertical-align:middle;white-space:nowrap}.v-step__button[data-v-aa0cbe42]:hover{background-color:hsla(0,0%,100%,.95);color:#50596c}
</style>
