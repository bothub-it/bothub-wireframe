<template>
  <layout>
    <section class="section">
      <div class="container">
        <div class="columns space-top">
          <form
            class="column is-desktop is-vcentered align-center"
            @onSubmit="userHandle()">
            <h1 class="title has-text-centered">Categories</h1>
            <h2 class="subtitle has-text-centered">
              Choose the categories where your repository fits.
              Don't worry, you can change them later.
            </h2>
            <div class="columns">
              <div
                v-for="category in categories1"
                :key="category.name"
                :class="{
                  'gap': true,
                  'column': true,
                  'has-text-centered': true,
                  'selected': category.selected}"
                @click="handleActivate(category)">
                <h4>{{ category.name }}</h4>
                <img
                  :src="require(`@/assets/imgs/${category.icon}.svg`)"
                  class="category-wrapper"
                  alt="avatar">
              </div>
            </div>
            <div class="columns">
              <div
                v-for="category in categories2"
                :key="category.name"
                :class="{
                  'gap': true,
                  'column': true,
                  'has-text-centered': true,
                  'selected': category.selected}"
                @click="handleActivate(category)">
                <h4>{{ category.name }}</h4>
                <img
                  :src="require(`@/assets/imgs/${category.icon}.svg`)"
                  class="category-wrapper"
                  alt="avatar">
              </div>
            </div>
            <div class="has-text-centered">
              <b-button
                type="is-primary"
                @click="categoryHandle()"
              >Next</b-button>
            </div>
          </form>
          <div class="column divisor"/>
          <div class="column">
            <img
              src="@/assets/imgs/select-category.svg"
              alt="avatar" >
          </div>
        </div>
      </div>
    </section>
  </layout>
</template>

<script>
import Layout from '@/components/shared/Layout';

export default {
  name: 'Step3',
  components: {
    Layout,
  },
  data() {
    return {
      categories1: [
        {
          name: 'Health', icon: 'health', selected: false, id: 1,
        },
        {
          name: 'Food', icon: 'food', selected: false, id: 2,
        },
        {
          name: 'Sport', icon: 'sport', selected: false, id: 3,
        },
      ],
      categories2: [
        {
          name: 'Tecnology', icon: 'tecno', selected: false, id: 4,
        },
        {
          name: 'Entertainment', icon: 'entertainment', selected: false, id: 5,
        },
        {
          name: 'Business', icon: 'business', selected: false, id: 6,
        },
      ],
      selectedCategories: [],
    };
  },
  methods: {
    handleActivate(e) {
      e.selected = !e.selected;
      if (e.selected) {
        this.selectedCategories.push(e);
      } else {
        this.handleRemove(e);
      }
    },
    handleRemove(value) {
      this.selectedCategories = this.selectedCategories.filter(e => e.name !== value.name);
    },
    categoryHandle() {
      this.$store.dispatch('setRepository', { categories: this.selectedCategories });
      this.$router.push({ name: 'step4' });
    },
  },
};
</script>

<style>
img {
  width: 80%;
}

.align-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.space-top {
  margin-top: 5rem;
}

.divisor {
  background: #e0e0e0;
  max-width: 1px;
  padding: .5px;
  margin: 0 2rem;
}

.category-wrapper:hover {
  transform: scale(1.1);
  transition: all .5s ease-in-out;
  cursor: pointer;
}

.selected {
  border-radius: 10px;
  border: .5px solid #50eb96;
}

.gap {
  margin: 1rem;
}
</style>
