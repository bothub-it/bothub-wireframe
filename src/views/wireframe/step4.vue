<template>
  <div class="tour-container">
    <layout>
      <div class="columns">
        <div class="column is-2 remove-space">
          <aside class="menu menu-space">
            <ul class="menu-list">
              <li>
                <a
                  :class="{ 'is-active': currentPage == 1}"
                  @click="currentPage = 1">
                  <b-icon
                    icon=""
                /> Summary</a>
              </li>
              <li>
                <a
                  id="v-step-0"
                  :class="{ 'is-active': currentPage == 2}"
                  @click="currentPage = 2">
                  <b-icon
                    icon="home"
                /> Train</a>
              </li>
              <li>
                <a>
                  <b-icon
                    icon="home"
                /> Translate</a>
              </li>
              <li>
                <a>
                  <b-icon
                    icon="home"
                /> Test</a>
              </li>
              <li>
                <a>
                  <b-icon
                    icon="home"
                /> Inbox</a>
              </li>
              <li>
                <a
                  :class="{ 'is-active': currentPage == 3}"
                  @click="currentPage = 3">
                  <b-icon
                    icon="home"
                /> Integrations</a>
              </li>
              <li>
                <a>
                  <b-icon
                    icon="home"
                /> Users</a>
              </li>
              <li>
                <a>
                  <b-icon
                    icon="home"
                /> Settings</a>
              </li>
            </ul>
          </aside>
        </div>
        <v-tour
          :callbacks="myCallbacks"
          :steps="steps"
          name="menuTour" />
        <div class="column">
          <step-5 v-show="currentPage == 1" />
          <step-6 v-show="currentPage == 2"/>
          <step-7 v-show="currentPage == 3"/>
        </div>
        <b-modal
          :active.sync="isComponentModalActive"
          has-modal-card
          trap-focus
          aria-role="dialog"
          aria-modal>
          <div class="card has-text-centered">
            <div class="card-content">
              <img
                src="~@/assets/imgs/mascot.svg">
              <h1>Let's start training your bot! </h1>
              <p>Hi! I will be your guide to help you perform.
              The first training and integration of your repository</p>
              <p>can we start?</p>
            </div>
            <footer class="modal-card-foot">
              <button
                class="button is-primary"
                @click="handleModal()">Lets go</button>
            </footer>
          </div>
        </b-modal>
      </div>
    </layout>
  </div>
</template>

<script>
import Layout from '@/components/shared/Layout';
import RepositoryBase from './base';
import SideBarNavigation from '@/components/shared/SideBar';
import step5 from './step5';
import step6 from './step6';
import step7 from './step7';


export default {
  name: 'RepositoryHome',
  components: {
    Layout,
    SideBarNavigation,
    step5,
    step6,
    step7,
  },
  extends: RepositoryBase,
  data() {
    return {
      isComponentModalActive: true,
      currentPage: 1,
      myOptions: {
        useKeyboardNavigation: true,
        labels: {
          buttonStop: 'Finalizar',
        },
      },
      steps: [
        {
          target: '#v-step-0', // We're using document.querySelector() under the hood
          content: "First let's go to the training screen!",
        },
      ],
      myCallbacks: {
        onStop: this.teste,
      },
    };
  },
  methods: {
    handleModal() {
      this.isComponentModalActive = false;
      this.$tours.menuTour.start();
    },
    teste() {
      this.currentPage = 2;
    },
  },
};
</script>

<style lang="scss">
.card {
  width: 500px;
  border-radius: 20px;

  img {
    width: 200px;
  }
}

.remove-space {
  padding-top: 0rem !important;
  height: 92.5vh;
}

.modal-card-foot {
  display: flex;
  justify-content: center;
}
</style>
