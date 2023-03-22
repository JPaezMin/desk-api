import settings from "@/services/SettingsService";

export const namespaced = true;
export const state = {
  connected: false,
  error: null,
  connectionId: "",
  incomingChats: [],
  socket: {},
  notifications: [],
};
export const actions = {
  async clearWebSocket({ commit }) {
    commit("CLEAR_SOCKET");
  },
  async processWebsocket({ dispatch, rootState, commit }) {
    const socket = await new WebSocket(settings.RUBIKO_WEBSOCKET);
    socket.onopen = function (event) {
      console.log("Websocket connected.");
      commit("SET_CONNECTION", event.type);
      dispatch("sendMessage", JSON.stringify({ message: "Hello, server." }));
    };
    socket.onmessage = function (event) {
      const socketData = JSON.parse(event.data);
      const socketDataNotificationType = socketData.type;
      if (
        socketData.connectionId &&
        socketData.connectionId !== state.connectionId
      ) {
        commit("SET_CONNECTION_ID", socketData.connectionId);
        dispatch("shifts/updateEventsSubscription", rootState.token.agentId, {
          root: true,
        });
      } else {
        if (
          socketData.notificationId &&
          !state.notifications.some(
            (el) => el["notificationId"] === socketData["notificationId"]
          )
        ) {
          state.notifications.push({ ...socketData });
          state.chatUpdated = false;
          switch (socketDataNotificationType) {
            case "incoming-chats-updated":
              dispatch("setIncomingChats", socketData.incomingChats);
              break;
            case "chat-updated": {
              console.log(
                "%c Chat Updted Notif Received",
                "background: #222; color: #bada55"
              );
              const chatSession = socketData.chat;
              if (!chatSession.isEnded) {
                dispatch("chatSession/fetchChatSession", chatSession, {
                  root: true,
                });
              }
              break;
            }
          }
        } else {
          console.log("Duplicate Notification");
        }
      }
    };
    socket.onerror = function (event) {
      console.log("webSocket: on error: ", event);
    };
    socket.onclose = function (event) {
      console.log("webSocket: on close: ", event);
      commit("SET_CONNECTION");
      state.socket = null;
      setTimeout(this.processWebsocket, 5000);
    };
    commit("SET_SOCKET", socket);
  },
  async waitForOpenConnection() {
    return new Promise((resolve, reject) => {
      const maxNumberOfAttempts = 10;
      const intervalTime = 200;
      let currentAttempt = 0;
      const interval = setInterval(() => {
        if (currentAttempt > maxNumberOfAttempts - 1) {
          clearInterval(interval);
          reject(new Error("Maximum number of attempts exceeded."));
        } else if (state.socket.readyState === state.socket.OPEN) {
          clearInterval(interval);
          resolve();
        }
        currentAttempt++;
      }, intervalTime);
    });
  },
  async sendMessage({ dispatch }, message) {
    if (state.socket.readyState !== state.socket.OPEN) {
      try {
        await dispatch("waitForOpenConnection", state.socket);
        state.socket.send(message);
      } catch (err) {
        console.error(err);
      }
    } else {
      state.socket.send(message);
    }
  },
  async setIncomingChats({ commit }, incomingChats) {
    commit("SET_INCOMING_CHATS", incomingChats);
  },
  async clearWebsocketNotifications({ commit }) {
    commit("CLEAR_WEBSOCKET_NOTIFICATIONS");
  },
};
export const mutations = {
  CLEAR_WEBSOCKET_NOTIFICATIONS(state) {
    state.notifications = [];
  },
  CLEAR_SOCKET(state) {
    state.socket.close();
    state.socket = {};
    state.connectionId = "";
  },
  SET_CONNECTION(state, message) {
    if (message == "open") {
      state.connected = true;
    } else state.connected = false;
  },
  SET_CONNECTION_ID(state, connectionId) {
    state.connectionId = connectionId;
  },
  SET_SOCKET(state, socket) {
    state.socket = socket;
  },
  SET_INCOMING_CHATS(state, incomingChats) {
    state.incomingChats = incomingChats;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};
export const getters = {
  getIncomingChats: (state) => {
    return state.incomingChats;
  },
  getConnectionId: (state) => {
    return state.connectionId;
  },
  getFirstChatInQueue: (state) => {
    return state.incomingChats[0];
  },
};
