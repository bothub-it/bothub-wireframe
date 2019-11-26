<template>
  <div>
    <form
      class="columns is-variable is-2"
      @submit.prevent="onExampleCreated()"
    >
      <div class="column is-three-fifths">
        <bh-field
          id="input-1"
          :errors="errors.text || errors.language"
        >
          <example-text-with-highlighted-entities-input
            ref="textInput"
            v-model="text"
            :entities="entities"
            :available-entities="entitiesList"
            :formatters="textFormatters"
            size="normal"
            placeholder="Add a sentence"
            @textSelected="setTextSelected($event)"
          >
            <language-append-select-input
              slot="append"
              v-model="language"
              class="language-append"
            />
          </example-text-with-highlighted-entities-input>
        </bh-field>
      </div>
      <div class="column">
        <bh-field
          :errors="errors.intent">
          <bh-autocomplete
            id="input-2"
            v-model="intent"
            :data="repository.intents_list || []"
            :formatters="intentFormatters"
            size="normal"
            placeholder="Intent" />
        </bh-field>
      </div>
      <div class="column is-narrow">
        <bh-field>
          <bh-button
            id="input-3"
            :disabled="!isValid || submitting "
            :tooltip-hover="!isValid ? validationErrors : null"
            :loading="submitting"
            primary
            size="normal"
            type="submit"
          >
            <slot v-if="!submitting">Submit</slot>
          </bh-button>
        </bh-field>
      </div>
    </form>
    <div class="columns is-variable is-1">
      <div class="column is-three-fifths">
        <bh-field :errors="errors.entities">
          <entities-input
            ref="entitiesInput"
            v-model="entities"
            :repository="repository"
            :text="text"
            :text-selected="textSelected"
            :available-entities="entitiesList"
            :available-labels="availableLabels"
            @entityAdded="onEntityAdded()"
          />
        </bh-field>
      </div>
    </div>
    <v-tour
      :options="buttonOptions"
      :steps="steps"
      name="myTour" />
  </div>
</template>

<script>
import ExampleTextWithHighlightedEntitiesInput from '@/components/inputs/ExampleTextWithHighlightedEntitiesInput';
import EntitiesInput from '@/components/inputs/EntitiesInput';
import LanguageAppendSelectInput from '@/components/inputs/LanguageAppendSelectInput';

import { mapActions } from 'vuex';
import BH from 'bh';
import { formatters } from '@/utils';

export default {
  name: 'NewExampleForm',
  components: {
    ExampleTextWithHighlightedEntitiesInput,
    EntitiesInput,
    LanguageAppendSelectInput,
  },
  props: {
    repository: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      textSelected: null,
      text: '',
      language: this.repository.language,
      intent: '',
      entities: [],
      errors: {},
      submitting: false,
      entitiesList: [],
      myOptions: {
        useKeyboardNavigation: true,
        labels: {
          buttonSkip: 'Skip tour',
          buttonPrevious: 'Previous',
          buttonNext: 'Proximo',
          buttonStop: 'Finalizar',
        },
      },
      buttonOptions: {
        useKeyboardNavigation: true,
        labels: {
          buttonSkip: 'Skip tour',
          buttonPrevious: 'Previous',
          buttonNext: 'Next',
          buttonStop: 'Ok',
        },
      },
      steps: [
        {
          target: '#input-1', // We're using document.querySelector() under the hood
          content: 'Enter a sentence here that you would like your bot to understand. Ex: I really want this',
        },
        {
          target: '#input-2', // We're using document.querySelector() under the hood
          content: 'And here, identify that intent of the sentence you typed matches. Ex: affirmative',
        },
        {
          target: '#input-3', // We're using document.querySelector() under the hood
          content: 'And finally, submit your sentence',
        },
      ],
    };
  },
  computed: {
    validationErrors() {
      const errors = [];

      if (!this.text) {
        errors.push('You need type a text to sentence');
      }

      if (!this.intent) {
        errors.push('Intent is required');
      }

      return errors;
    },
    isValid() {
      return this.validationErrors.length === 0;
    },
    textFormatters() {
      const formattersList = [
        BH.utils.formatters.trimStart(),
        BH.utils.formatters.removeBreakLines(),
        BH.utils.formatters.removeMultipleWhiteSpaces(),
      ];
      formattersList.toString = () => 'textFormatters';
      return formattersList;
    },
    intentFormatters() {
      const formattersList = [
        formatters.bothubItemKey(),
      ];
      formattersList.toString = () => 'intentFormatters';
      return formattersList;
    },
    availableEntities() {
      const repositoryEntities = this.repository.entities_list || [];
      const entitiesFlat = this.entities.map(e => e.entity);
      return repositoryEntities
        .concat(entitiesFlat)
        .filter((entity, index, current) => (current.indexOf(entity) === index));
    },
    availableLabels() {
      const repositoryLabels = this.repository.labels_list || [];

      return repositoryLabels
        .filter(label => !!label)
        .filter((label, index, current) => (current.indexOf(label) === index));
    },
    data() {
      const {
        text,
        language,
        intent,
        entities,
      } = this;

      return {
        text,
        language,
        intent,
        entities,
      };
    },
  },
  mounted() {
    this.entitiesList = this.availableEntities;
    this.$tours.myTour.start();
  },
  methods: {
    ...mapActions([
      'newExample',
    ]),
    setTextSelected(value) {
      this.textSelected = value;
    },
    onEntityAdded() {
      if (this.$refs.textInput.clearSelected) {
        /* istanbul ignore next */
        this.$refs.textInput.clearSelected();
      }
    },
    async onExampleCreated() {
      this.$emit('created', this.data);
      this.text = '';
      this.intent = '';
    },
  },
};
</script>

<style lang="scss" scoped>
.language-append {
  flex-grow: 0;
}
</style>
