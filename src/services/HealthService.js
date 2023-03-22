import axios from "axios";
import settings from "@/services/SettingsService";

const backEndVersionBaseUrl = settings.RUBIKO_DESK_BASE_URL;

export default {
  getBackEndVersion() {
    const backEndVersionUrl = `${backEndVersionBaseUrl}/health`;
    return axios.get(backEndVersionUrl, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
      },
    });
  },
};
