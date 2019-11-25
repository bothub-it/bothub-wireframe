<template>
  <div>
    <div v-if="true">
      <example-item />
    </div>
    <p
      v-else
      class="no-examples">No examples.</p>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ExampleItem from '@/components/example/ExampleItem';


const components = {
  ExampleItem,
};

export default {
  name: 'ExamplesList',
  components,
  props: {
    query: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      examplesList: null,
      exampleItemElem: ExampleItem,
    };
  },
  computed: {
    ...mapState({
      repository: state => state.Repository.selectedRepository,
    }),
  },
  watch: {
    query() {
      this.updateExamples(true);
    },
    repository() {
      this.updateExamples(true);
    },
  },
  mounted() {
    this.updateExamples();
  },
  methods: {
    updateExamples(force = false) {
      if (!this.examplesList || force) {
        this.examplesList = this.$api.examples.search(
          this.repository.uuid,
          this.query,
        );
      }
    },
    onItemDeleted() {
      this.$emit('exampleDeleted');
    },
  },
};
</script>

<style lang="scss" scoped>
.no-examples {
  margin: 8px;
}
</style>
