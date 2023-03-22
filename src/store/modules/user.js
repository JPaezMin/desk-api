import UserService from "@/services/UserService.js";
import TokenService from "@/services/TokenService.js";
import router from "@/router";
export const namespaced = true;
export const state = {
  accessToken: "",
  errorMessage: "",
  errorState: false,
  userEmail: localStorage.getItem("userEmail"),
  userPassword: localStorage.getItem("userPassword"),
};
export const mutations = {
  SET_TOKEN(state, accessToken) {
    state.accessToken = accessToken;
    TokenService.saveToken(accessToken);
  },
  SET_USER_DATA(state, userData) {
    state.userEmail = userData.email;
    state.userPassword = userData.password;
    localStorage.setItem("userPassword", userData.password);
    localStorage.setItem("userEmail", userData.email);
  },
  CLEAR_USER_DATA() {
    localStorage.removeItem("userPassword");
    localStorage.removeItem("userEmail");
    TokenService.removeToken(this.accessToken);
    location.reload;
  },
  SET_ERROR(state, error) {
    state.errorState = true;
    state.errorMessage = error.data.error_description;
  },
};
export const actions = {
  async signIn({ commit, dispatch, rootState }, userData) {
    try {
      const result = await UserService.authUser(userData);
      commit("SET_TOKEN", result.data.access_token);
      commit("SET_USER_DATA", userData);
      await dispatch("token/decodeToken", result.data.access_token, {
        root: true,
      });
      await dispatch("shifts/startShift", rootState.token.agentId, {
        root: true,
      });
      router.push("/support");
    } catch (error) {
      const notification = {
        type: "error",
        message: `Error in Login ${error.message}`,
      };
      dispatch("notification/add", notification, { root: true });
      if (error.response.status === 400) {
        commit("CLEAR_USER_DATA");
        commit("SET_ERROR", error.response);
      } else {
        console.log(error.response);
      }
    }
  },
  signOut({ commit, dispatch }) {
    commit("CLEAR_USER_DATA");
    dispatch("chat/clearChats", null, {
      root: true,
    });
    dispatch("websocket/clearWebsocketNotifications", null, {
      root: true,
    });
    dispatch("websocket/clearWebSocket", null, {
      root: true,
    });
    router.push("/");
  },
};
export const getters = {
  getToken: (state) => {
    return state.accessToken;
  },
  errorState: (state) => {
    return state.errorState;
  },
  errorMessage: (state) => {
    return state.errorMessage;
  },
  isAuthenticated: (state) => {
    return state.accessToken;
  },
  userEmail: (state) => {
    return state.userEmail;
  },
  userPassword: (state) => {
    return state.userPassword;
  },
};
