<template>
  <div class="filter-evaluate-example">
    <div class="filter-evaluate-example__filters">
      <bh-field
        :errors="errors.intent"
        class="filter-evaluate-example__filters__input-text">
        <bh-text
          v-model="text"
          :debounce="debounceTime">
          <div slot="append">
            <bh-icon-button
              value="magnify"
              size="medium"
              type="submit" />
          </div>
        </bh-text>
      </bh-field>
      <div class="filter-evaluate-example__filters__wrapper">
        <span class="filter-evaluate-example__filters__wrapper__text">Filter by:</span>
        <bh-field
          :errors="errors.intent">
          <bh-autocomplete
            v-model="intent"
            :data="intents || []"
            :formatters="inputFormatters"
            placeholder="All Intents" />
        </bh-field>
        <bh-field
          :errors="errors.intent">
          <bh-autocomplete
            v-model="entity"
            :data="entities || []"
            :formatters="inputFormatters"
            placeholder="All entities" />
        </bh-field>
      </div>
    </div>
  </div>
</template>

<script>
import { formatters } from '@/utils/index';
import _ from 'lodash';


export default {
  name: 'FilterEvaluateExample',
  props: {
    debounceTime: {
      type: Number,
      default: 750,
    },
    intents: {
      type: Array,
      default: null,
    },
    entities: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      text: '',
      intent: '',
      entity: '',
      setTimeoutId: null,
      errors: {},
    };
  },
  computed: {
    inputFormatters() {
      const formattersList = [
        formatters.bothubItemKey(),
      ];
      formattersList.toString = () => 'inputFormatters';
      return formattersList;
    },
  },
  watch: {
    text(value) {
      this.$emit('queryStringFormated', { search: value });
    },
    intent: _.debounce(function emitIntent(value) {
      this.$emit('queryStringFormated', { intent: value });
    }, 500),
    entity: _.debounce(function emitEntity(value) {
      this.$emit('queryStringFormated', { entity: value });
    }, 500),
  },
};
</script>

<style lang="scss">
.filter-evaluate-example {
  width: 100%;
  margin: 0 auto .5rem;

  &__filters {
    display: grid;
    grid-template-columns: 35% 1fr;
    grid-gap: 3rem;

    &__input-text {
      align-self: center;
    }

    &__wrapper {
      display: grid;
      grid-template-columns: 11% 1fr 1fr;
      grid-gap: .5rem;

      &__text {
        align-self: center;
      }
    }
  }

  &__text {
    margin-top: .5rem;
  }
}
</style>
