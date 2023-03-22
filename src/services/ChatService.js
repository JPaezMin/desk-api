import axios from "axios";
import settings from "@/services/SettingsService";

const chatBaseUrl = settings.RUBIKO_DESK_BASE_URL;

export default {
  assignChatToAgent(assignChatObject) {
    const assignChatUrl = `${chatBaseUrl}/api/chats/${assignChatObject.aggregateId}/assignation`;
    return axios.put(assignChatUrl, assignChatObject, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
      },
    });
  },
  sendChatMessage(messageObject) {
    const sendMessageURL = `${chatBaseUrl}/api/chats/${messageObject.aggregateId}/agentMessages`;
    return axios.post(sendMessageURL, messageObject, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
      },
    });
  },
  endChat(chatId) {
    const endChatUrl = `${chatBaseUrl}/api/chats/${chatId}/`;
    return axios.delete(endChatUrl, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
      },
    });
  },
};
