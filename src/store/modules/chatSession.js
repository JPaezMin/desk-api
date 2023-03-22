export const namespaced = true;
export const state = () => ({
  chatSessions: [],
  updatedChatSessionIds: [],
  scrollingChatWidget: false,
});
export const actions = {
  async addUpdatedChatSession({ commit, state }, chatSessionId) {
    const findDuplicate = state.updatedChatSessionIds.findIndex(
      (item) => item == chatSessionId
    );
    if (findDuplicate === -1) {
      commit("ADD_UPDATED_CHAT_SESSION", chatSessionId);
    }
  },
  async removeUpdatedChatSession({ commit, state }, chatSessionId) {
    console.log("Removing from updatedChatSessionIds" + " " + chatSessionId);
    const newUpdatedChatSessionsArray = state.updatedChatSessionIds.filter(
      (item) => {
        return item !== chatSessionId;
      }
    );
    commit("REMOVE_UPDATED_CHAT_SESSION", newUpdatedChatSessionsArray);
  },
  async addChatSession({ commit }, chatSession) {
    commit("ADD_CHAT_SESSION", chatSession);
  },
  async removeChatSession({ commit, state }, chatSessionId) {
    console.log("Finishing Chat");
    const newChatSessionsArray = state.chatSessions.filter((chatsession) => {
      return chatsession.id !== chatSessionId;
    });
    commit("REMOVE_CHAT_SESSION", newChatSessionsArray);
  },
  async fetchChatSession({ dispatch, commit, state }, chatSession) {
    if (!state.chatSessions.some((el) => el["id"] === chatSession["id"])) {
      console.log("chatSession ID do not exist, adding Tab");
      commit("SET_CHAT_SESSION", chatSession);
      dispatch("setChatSessionEvents", chatSession);
    } else {
      console.log("chatSession ID Exist Refreshing Tab");
      Object.assign(
        state.chatSessions.find((x) => x.id === chatSession.id),
        chatSession
      );
      dispatch("setChatSessionEvents", chatSession);
    }
  },
  async setChatSessionEvents({ dispatch }, chatSession) {
    let dispatchingChatEventActions = () => {
      const chatEvents = chatSession.events;
      const CHATEVENTS_TYPE = {
        ChatCreated: () => {
          console.log("Chat Created");
        },
        ChatAgentAssigned: () => {
          console.log("Chat Assigned");
        },
        // ChatAgentMessageAdded: (chat) => {
        //   console.log("Agent message Added");
        //   dispatch("addChat", chat);
        // },
        ChatEnded: () => {
          console.log("Chat Ended");
          dispatch("chatSession/removeChatSession", chatSession.id, {
            root: true,
          });
        },
        // ChatEndUserMessageAdded: (chat) => {
        //   console.log("End User Message Added");
        //   dispatch("addChat", chat);
        // },
      };
      const CHATEVENTS_TYPE_DEFAULT = "Another Type Of Event";
      chatEvents.forEach(function (chat) {
        const eventType = chat.type;
        return CHATEVENTS_TYPE[`${eventType}`]
          ? CHATEVENTS_TYPE[`${eventType}`](chat)
          : CHATEVENTS_TYPE_DEFAULT;
      });
    };
    dispatchingChatEventActions();
  },
  clearChatSessions({ commit }) {
    commit("CLEAR_CHAT_SESSIONS");
  },
};
export const mutations = {
  ADD_CHAT_SESSION(state, chatSession) {
    state.chatSessions.push({
      ...chatSession,
    });
  },
  ADD_UPDATED_CHAT_SESSION(state, chatSessionId) {
    state.updatedChatSessionIds.push(chatSessionId);
  },
  REMOVE_UPDATED_CHAT_SESSION(state, newUpdatedChatSessionsArray) {
    state.updatedChatSessionIds.splice(
      0,
      state.updatedChatSessionIds.length,
      ...newUpdatedChatSessionsArray
    );
    console.log(state.updatedChatSessionIds);
  },
  REMOVE_CHAT_SESSION(state, newChatSessionsArray) {
    state.chatSessions.splice(
      0,
      state.chatSessions.length,
      ...newChatSessionsArray
    );
  },
  SET_CHAT_SESSION(state, chatSession) {
    state.chatSessions.push({
      ...chatSession,
    });
  },
  CLEAR_CHAT_SESSIONS(state) {
    state.chatSessions = [];
  },
};
export const getters = {
  getIncomingChatSessions: (state) => {
    return state.chatSessions;
  },
  getChatSessionEventsById: (state) => (chatSessionId) => {
    return state.chatSessions.find(
      (chatSession) => chatSession.id === chatSessionId
    ).events.length;
  },
  getUpdatedChatSessionIds: (state) => {
    return state.updatedChatSessionIds;
  },
};
