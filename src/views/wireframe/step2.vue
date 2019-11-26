<template>
  <layout>
    <section class="section">
      <div class="container">
        <div class="columns space-top">
          <form
            class="column is-desktop is-vcentered align-center"
            @onSubmit="userHandle()">
            <h1 class="title has-text-centered">Bem-vindo</h1>
            <h2 class="subtitle has-text-centered">
              Bothub é uma plataforma aberta para predição, treinamento e
              compartilhamento de conjuntos de dados em vários idiomas.
            </h2>
            <h2 class="subtitle has-text-centered">
              Vamos começar dando nome ao seu repositório, escolhendo seu idioma
              e decidingo se será público ou privado.
            </h2>
            <b-field label="Nome do bot">
              <b-input v-model="repositoryInfo.name"/>
            </b-field>
            <b-field
              label="Idioma">
              <b-select
                v-model="repositoryInfo.language"
                placeholder="Selecione seu idioma"
                expanded>
                <option value="English">English</option>
                <option value="Portuguese">Português</option>
                <option value="Japanese">Japanese</option>
              </b-select>
            </b-field>
            <div class="field">
              <b-switch
                v-model="repositoryInfo.is_private"
                :value="true"
                type="is-success">
                Privado
              </b-switch>
            </div>
            <div class="has-text-centered">
              <b-button
                type="is-primary"
                @click="repoHandle()"
              >Próximo</b-button>
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
