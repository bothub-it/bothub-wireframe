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
                  <!-- <b-icon
                    icon=""
                />  -->
                  Resumo</a>
              </li>
              <li>
                <a
                  id="trainView"
                  :options="trainViewOptions"
                  :class="{ 'is-active': currentPage == 2}"
                  @click="currentPage = 2">
                  <!-- <b-icon
                    icon="home"
                /> -->
                  Treinar</a>
              </li>
              <li>
                <a>
                  <!-- <b-icon
                    icon="home"
                  />  -->
                  Traduzir
                </a>
              </li>
              <li>
                <a>
                  <!-- <b-icon
                    icon="home"
                />  -->
                  Testar</a>
              </li>
              <li>
                <a>
                  <!-- <b-icon
                    icon="home"
                />  -->
                  Validar</a>
              </li>
              <li>
                <a
                  id="integration"
                  :class="{ 'is-active': currentPage == 3}"
                  @click="currentPage = 3">
                  <!-- <b-icon
                    icon="home"
                /> -->
                  Integrações</a>
              </li>
              <li>
                <a>
                  <!-- <b-icon
                    icon="home"
                />  -->
                  Usuários</a>
              </li>
              <li>
                <a>
                  <!-- <b-icon
                    icon="home"
                />  -->
                  Configurações</a>
              </li>
            </ul>
          </aside>
        </div>
        <v-tour
          :options="trainViewOptions"
          :callbacks="myCallbacks"
          :steps="steps"
          name="menuTour" />
        <v-tour
          :options="trainViewOptions"
          :callbacks="myCallbacks2"
          :steps="steps3"
          name="integrationButton" />
        <div class="column">
          <step-5 v-if="currentPage == 1" />
          <step-6
            v-if="currentPage == 2"
            @integrationTour="goIntegration()"/>
          <step-7 v-if="currentPage == 3"/>
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
              <h1>Vamos começar treinando seu bot! </h1>
              <p>Oi! Eu serei seu guia pra te ajudar a treinar.
              O primeiro treinamento e integração do seu repositório</p>
              <p>podemos começar?</p>
            </div>
            <footer class="modal-card-foot">
              <button
                class="button is-primary"
                @click="handleModal()">Vamos lá</button>
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
      trainViewOptions: {
        useKeyboardNavigation: true,
        labels: {
          buttonStop: 'OK',
        },
      },
      steps: [
        {
          target: '#trainView', // We're using document.querySelector() under the hood
          content: 'Primeiro vamos para a tela de treinamento!',
        },
      ],
      steps3: [
        {
          target: '#integration', // We're using document.querySelector() under the hood
          content: 'Agora clique aqui',
        },
      ],
      myCallbacks: {
        onStop: this.changePage,
      },
      myCallbacks2: {
        onStop: this.changeToIntegration,
      },
    };
  },
  methods: {
    handleModal() {
      this.isComponentModalActive = false;
      this.$tours.menuTour.start();
    },
    goIntegration() {
      this.$tours.integrationButton.start();
    },
    changePage() {
      this.currentPage = 2;
    },
    changeToIntegration() {
      this.currentPage = 3;
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
