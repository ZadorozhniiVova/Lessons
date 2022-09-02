const state = {
  //Персонажи
  characters: [{ id: 1 }, { id: 2 }],
  pages: 0,
};
const getters = {
  //Отдает данные из хранилища
  getCharacters(state) {
    return state.characters;
  },
  //getCharactersById
  //getFilteredCharacters
};
const mutations = {};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
