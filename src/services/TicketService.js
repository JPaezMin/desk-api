import axios from "axios";
import settings from "@/services/SettingsService";

const chatBaseUrl = settings.RUBIKO_DESK_BASE_URL;

export default {
  fetchTickets(page, count) {
    const ticketsUrl = `${chatBaseUrl}/api/tickets?channel=chat&page=${page}&count=${count}&isDescending=false&sortBy=Id`;
    return axios.get(ticketsUrl, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
      },
    });
  },
};
