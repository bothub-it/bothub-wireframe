<template>
  <b-switch
    v-model="value"
    @input="update()">{{ verboseValue }}</b-switch>
</template>

<script>

export default {
  props: {
    initialData: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value: this.initialData,
    };
  },
  computed: {
    verboseValue() {
      return this.value ? 'Yes' : 'No';
    },
  },
  mounted() {
    this.update();
  },
  methods: {
    update() {
      this.$emit('input', this.value);
    },
  },
};
</script>
