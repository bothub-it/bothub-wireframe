import TYPES from '../types';

export default {
  [TYPES.SET_REPOSITORY_RELATED_UUID](state, { ownerNickname, slug, uuid }) {
    state.relatedUuid = Object.assign(
      {},
      state.relatedUuid,
      {
        [`${ownerNickname}/${slug}`]: uuid,
      },
    );
  },
  setRepository(state, value) {
    const {
      name, language, isPrivate, categories,
    } = value;
    state.selectedRepository.name = name || state.selectedRepository.name;
    state.selectedRepository.is_private = isPrivate || state.selectedRepository.is_private;
    state.selectedRepository.language = language || state.selectedRepository.language;
    state.selectedRepository.categories_list = categories
    || state.selectedRepository.categories_list;
  },
  updateRepository(state, value) {
    state.updateRepository = value;
  },
  updateEvaluateResultId(state, { id, version }) {
    state.evaluateResultId = id;
    state.evaluateResultVersion = version;
    state.currentTabSelected = 1;
  },
  updateEvaluateLanguage(state, value) {
    state.evaluateLanguage = value;
  },
  updateCurrentTab(state, value) {
    state.currentTabSelected = value;
  },
};
