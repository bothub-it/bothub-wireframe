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
              <b-input v-model="user.email"/>
            </b-field>
            <b-field
              label="Language">
              <b-select
                v-model="user.language"
                placeholder="Select your language"
                expanded>
                <option value="English">English</option>
                <option value="Portuguese">Portuguese</option>
                <option value="Japanese">Japanese</option>
              </b-select>
            </b-field>
            <div class="field">
              <b-switch
                :value="true"
                type="is-success">
                Private
              </b-switch>
            </div>
            <div class="has-text-centered">
              <b-button
                type="is-primary"
                @click="userHandle()"
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
      user: {
        email: '',
        name: '',
        username: '',
        password: '',
        language: '',
      },
    };
  },
  methods: {
    userHandle() {
      console.log(this.user);
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
