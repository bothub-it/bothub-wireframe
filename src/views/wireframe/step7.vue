<template>
  <div v-if="repository">
    <div
      class="repository-analyze-text" >
      <div class="bh-grid">
        <div class="bh-grid__item bh-grid__item--1-2">
          <div class="repository-analyze-text__item">
            <p>Make a HTTP request to NLP service, follow the example bellow.</p>
          </div>
          <div class="repository-analyze-text__item">
            <p><strong>URL:</strong></p>
              <bh-highlighted-pre
                code-class="plaintext">{{
                  repository.nlp_server }}parse/</bh-highlighted-pre>
          </div>
          <v-tour
            :options="myOptions"
            :steps="steps"
            name="copyAuthorization" />
          <div class="repository-analyze-text__item">
            <p><strong>Header:</strong></p>
              <bh-highlighted-pre
              id="uuid"
                code-class="plaintext">Authorization: Bearer {{
                  repository.authorization.uuid }}</bh-highlighted-pre>
          </div>
          <div class="repository-analyze-text__item">
            <p><strong>POST with form-data:</strong></p>
              <bh-highlighted-pre code-class="plaintext">language: [language code]
text: [text to analyze]"</bh-highlighted-pre>
          </div>
          <div class="repository-analyze-text__item">
            <p><strong>Response:</strong></p>
              <bh-highlighted-pre code-class="json">{
  "intent": {
    "name": "love",
    "confidence": 0.6943462393863934
  },
  "intent_ranking": [
    {
      "name": "love",
      "confidence": 0.6943462393863934
    },
    {
      "name": "hate",
      "confidence": 0.30565376061360666
    }
  ],
  "labels_list": [
    "animal"
  ],
  "entities_list": [],
  "entities": {
    "animal": [
      {
        "value": "puppy",
        "entity": "dog",
        "confidence": 0.67255946125065845
      }
    ],
    "other": []
  },
  "text": "i love my puppy",
  "update_id": 47,
  "language": "en"
}</bh-highlighted-pre>
          </div>
        </div>
        <div class="bh-grid__item bh-grid__item--1-2">
          <div class="repository-analyze-text__item">
            <div><strong>Code Generator:</strong></div>
            <div>Generate code to your respective programming language.</div>
          </div>
          <request-generator
            :default-language-field="repository.language"
            :authorization-uuid="repository.authorization.uuid"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RepositoryViewBase from '@/components/repository/RepositoryViewBase';
import RepositoryBase from './base';
import RequestGenerator from '@/components-v1/repository/RequestGenerator';
import LoginForm from '@/components/auth/LoginForm';
import UpdatesList from '@/components/update/UpdatesList';


export default {
  name: 'Step7',
  components: {
    RepositoryViewBase,
    RequestGenerator,
    LoginForm,
    UpdatesList,
  },
  extends: RepositoryBase,
  data() {
    return {
      myOptions: {
        useKeyboardNavigation: true,
        labels: {
          buttonStop: 'Ok',
        },
      },
      steps: [
        {
          target: '#uuid', // We're using document.querySelector() under the hood
          content: "Use your authorization code and you'll be ready to make your products smarter (:",
        },
      ],
    };
  },
  computed: {},
  mounted() {
    this.$tours.copyAuthorization.start();
  },
};
</script>

<style lang="scss">
.repository-analyze-text {
  padding: 1rem;

  &__item {
    margin: 1rem 0;
  }
}
</style>
