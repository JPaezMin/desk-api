export const namespaced = true;
export const state = () => ({
  chats: [],
  limit: 10,
});
export const actions = {
  addChat({ commit }, chat) {
    commit("SET_CHATS", chat);
  },
  clearChats({ commit }) {
    commit("CLEAR_CHATS");
  },
};
export const mutations = {
  SET_CHATS(state, chat) {
    state.chats.push({
      ...chat,
    });
  },
  CLEAR_CHATS(state) {
    state.chats = [];
    console.log(
      "%c Clearing Messages From The Chat Widget",
      "background: #222; color: #ff2560"
    );
  },
};
export const getters = {
  getChatMessages: (state) => {
    return state.chats;
  },
};
