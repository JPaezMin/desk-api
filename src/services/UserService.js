import axios from "axios";
import settings from "@/services/SettingsService";

const params = new URLSearchParams();
params.append("client_id", "rubiko-client");
params.append("secret", "Rub!k0");
params.append("scope", "rubiko-service-desk-api");
params.append("grant_type", "password");

const config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: "Basic cnViaWtvLWNsaWVudDpSdWIhazA=",
  },
};

export default {
  authUser(userData) {
    params.set("username", userData.email);
    params.set("password", userData.password);
    const tokenUrl = `${settings.RUBIKO_AUTH_BASE_URL}/connect/token`;
    return axios.post(tokenUrl, params, config);
  },
};
