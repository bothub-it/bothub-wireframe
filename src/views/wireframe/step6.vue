<template>
  <div
    v-if="repository"
    class="bh-grid bh-grid--column">
    <div class="bh-grid__item bh-grid__item--nested">
      <div class="bh-grid trainings-repository__new-example">
        <div class="bh-grid__item">
          <div>
            <div>
              <h2>Treine uma nova frase</h2>
              <span>Adicione exemplos para melhorar a inteligência do seu bot.</span>
              <new-example-form
                :repository="repository"
                @created="onExampleCreated($event)" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <div class="bh-grid__item">
      <div class="trainings-repository__list-wrapper">
        <h2>Lista de frases</h2>
        <div id="training">
          <bh-button
            v-if="repository.examples__count > 0 && repository.authorization.can_write "
            ref="training"
            color="secondary-light"
            size="normal"
            @click="openTrainingModal">
            Treinar
          </bh-button>
        </div>

      </div>
      <filter-examples
        :intents="repository.intents_list"
        :entities="repository.entities_list"
        @queryStringFormated="onSearch($event)"/>
      <examples-list
        :items="examples"
        :query="query"
        @exampleDeleted="onExampleDeleted" />
    </div>
    <v-tour
      :options="analyzeOptions"
      :steps="steps2"
      name="analyze" />
    <analyze-text-drawer
      id="analyze-1"
      :repository-uuid="repository.uuid"
      :default-language="repository.language"
      :available-languages="repository.available_languages"
      @integration="callIntegration()" />
    <v-tour
      :steps="steps"
      name="training" />
    <v-tour
      :steps="steps"
      name="in" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import RepositoryBase from './base';
import RepositoryViewBase from '@/components/repository/RepositoryViewBase';
import NewExampleForm from '@/components/example/NewExampleForm';
import FilterExamples from '@/components/repository/repository-evaluate/example/FilterEvaluateExample';
import ExamplesList from '@/components/example/ExamplesList';
import LoginForm from '@/components/auth/LoginForm';
import ExampleSearchInput from '@/components/example/ExampleSearchInput';
import RequestAuthorizationModal from '@/components/repository/RequestAuthorizationModal';
import TrainModal from '@/components/repository/TrainModal';
import TrainResponse from '@/components/repository/TrainResponse';
import { exampleSearchToDicty, exampleSearchToString } from '@/utils/index';

import AnalyzeTextDrawer from '@/components/repository/AnalyzeTextDrawer';


export default {
  name: 'Step6',
  components: {
    RepositoryViewBase,
    NewExampleForm,
    FilterExamples,
    ExamplesList,
    LoginForm,
    ExampleSearchInput,
    RequestAuthorizationModal,
    TrainModal,
    TrainResponse,
    AnalyzeTextDrawer,
  },
  extends: RepositoryBase,
  data() {
    return {
      trainModalOpen: false,
      requestAuthorizationModalOpen: false,
      trainResponseData: null,
      trainResponseOpen: false,
      querySchema: {},
      query: {},
      training: false,
      examples: [],
      myOptions: {
        useKeyboardNavigation: true,
        labels: {
          buttonSkip: 'Pular tour',
          buttonPrevious: 'Anterior',
          buttonNext: 'Próximo',
          buttonStop: 'Finalizar',
        },
      },
      steps: [
        {
          target: '#training', // We're using document.querySelector() under the hood
          content: 'Agora execute o treinamento!',
        },
      ],
      analyzeOptions: {
        useKeyboardNavigation: true,
        labels: {
          buttonStop: 'Ok',
        },
      },
      steps2: [
        {
          target: '#analyze-1', // We're using document.querySelector() under the hood
          content: 'Seu bot foi treinado! Agora, vamos fazer um teste rápido?',
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      'authenticated',
    ]),
  },
  methods: {
    ...mapActions([
      'openLoginModal',
      'trainRepository',
    ]),
    callIntegration() {
      this.$emit('integrationTour');
    },
    onSearch(value) {
      Object.assign(this.querySchema, value);

      if (!this.querySchema.intent) {
        delete this.querySchema.intent;
      }
      if (!this.querySchema.entity) {
        delete this.querySchema.entity;
      }
      if (!this.querySchema.label) {
        delete this.querySchema.label;
      }
      const formattedQueryString = exampleSearchToString(this.querySchema);
      this.query = exampleSearchToDicty(formattedQueryString);
    },
    openTrainingModal() {
      this.$tours.analyze.start();
    },
    openRequestAuthorizationModal() {
      this.requestAuthorizationModalOpen = true;
    },
    onAuthorizationRequested() {
      this.requestAuthorizationModalOpen = false;
      this.$toast.open({
        message: 'Request made! Wait for review of an admin.',
        type: 'is-success',
      });
      this.updateRepository(false);
    },
    onExampleCreated(event) {
      this.examples.push(event);
      if (this.examples.length >= 1) {
        this.$tours.training.start();
      }
    },
    onExampleDeleted() {
      this.repository.examples__count -= 1;
      this.updateRepository(false);
    },
    async train(repositoryUUID) {
      this.training = true;
      try {
        const response = await this.trainRepository({ repositoryUUID });
        this.trainResponseData = response.data;
        this.trainResponseOpen = true;
      } catch (e) {
        this.$toast.open({
          message: 'Repository not trained :(',
          type: 'is-danger',
        });
      }
      this.trainModalOpen = false;
      this.training = false;
      await this.updateRepository(false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '~bh/src/assets/scss/colors.scss';


.trainings-repository {
  &__list-wrapper {
    display: flex;
    justify-content: space-between;
    margin-bottom: .5rem;
  }

  &__new-example {
    margin-top: 1rem;
    background-color: $color-white;
  }
}
</style>
