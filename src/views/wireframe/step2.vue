<template>
  <layout>
    <section class="section">
      <div class="container">
        <div class="columns space-top">
          <form
            class="column is-desktop is-vcentered align-center"
            @onSubmit="userHandle()">
            <h1 class="title has-text-centered">Welcome</h1>
            <h2 class="subtitle has-text-centered">
              Bothub is an open platform for predicting, training and sharing NLP
              datasets in multiple languages.
            </h2>
            <h2 class="subtitle has-text-centered">
              Let's start by putting a name in your repository, choosing its language
              and deciding if it will be open to the public or private.
            </h2>
            <b-field label="Bot name">
              <b-input v-model="repositoryInfo.name"/>
            </b-field>
            <b-field
              label="Language">
              <b-select
                v-model="repositoryInfo.language"
                placeholder="Select your language"
                expanded>
                <option value="English">English</option>
                <option value="Portuguese">Portuguese</option>
                <option value="Japanese">Japanese</option>
              </b-select>
            </b-field>
            <div class="field">
              <b-switch
                v-model="repositoryInfo.is_private"
                :value="true"
                type="is-success">
                Private
              </b-switch>
            </div>
            <div class="has-text-centered">
              <b-button
                type="is-primary"
                @click="repoHandle()"
              >Next</b-button>
            </div>
          </form>
          <div class="column divisor"/>
          <div class="column">
            <img
              src="@/assets/imgs/undraw.svg"
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
  name: 'Step2',
  components: {
    Layout,
  },
  data() {
    return {
      repositoryInfo: {
        name: '',
        is_private: '',
        language: '',
      },
    };
  },
  methods: {
    repoHandle() {
      this.$store.dispatch('setRepository', this.repositoryInfo);
      this.$router.push({ name: 'step3' });
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
</style>
