<template>
  <b-input
    :maxlength="max_length"
    v-model="value"
    password-reveal
    type="password"
    @input="update()" />
</template>

<script>
export default {
  props: {
    max_length: {
      type: Number,
      default: null,
    },
    initialData: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      value: this.initialData,
    };
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
