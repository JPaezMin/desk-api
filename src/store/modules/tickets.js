import TicketService from "@/services/TicketService.js";
export const namespaced = true;
export const state = {
  tickets: [],
};
export const actions = {
  async fetchTickets({ commit }) {
    try {
      const response = await TicketService.fetchTickets();
      commit("SET_TICKETS", response.data.items);
    } catch (error) {
      console.log("There was an error fetching Tickets:", error.response);
    }
  },
};
export const mutations = {
  SET_TICKETS(state, payload) {
    state.tickets = payload;
  },
};
export const getters = {
  getRowData: (state) => {
    return state.tickets;
  },
};
