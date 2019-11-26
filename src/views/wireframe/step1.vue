<template>
  <layout>
    <section class="section">
      <div class="container">
        <div class="columns space-top">
          <div class="column">
            <img
              src="@/assets/imgs/computer-bot.png"
              alt="avatar" >
          </div>
          <form
            class="column is-desktop is-vcentered align-center"
          >
            <h1 class="title has-text-centered">Create account</h1>
            <b-field label="Email">
              <b-input v-model="user.email"/>
            </b-field>
            <b-field label="Nome">
              <b-input v-model="user.name"/>
            </b-field>
            <b-field label="Nome de usuário">
              <b-input v-model="user.username"/>
            </b-field>
            <b-field label="Senha">
              <b-input
                v-model="user.password"
                type="password"/>
            </b-field>
            <b-field
              label="Idioma">
              <b-select
                v-model="user.language"
                placeholder="Selecione seu idioma"
                expanded>
                <option value="English">English</option>
                <option value="Portuguese">Português</option>
                <option value="Japanese">Japanese</option>
              </b-select>
            </b-field>
            <div class="has-text-centered">
              <b-button
                type="is-primary"
                @click="userHandle()"
              >Create account</b-button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </layout>
</template>

<script>
import Layout from '@/components/shared/Layout';

export default {
  name: 'Step1',
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
      this.$store.dispatch('setInfo', this.user);
      this.$router.push({ name: 'step2' });
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
</style>
