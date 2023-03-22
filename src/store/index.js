import { createStore } from "vuex";
import * as chat from "@/store/modules/chat";
import * as chatSession from "@/store/modules/chatSession";
import * as languages from "@/store/modules/languages";
import * as shifts from "@/store/modules/shifts";
import * as tickets from "@/store/modules/tickets";
import * as token from "@/store/modules/token";
import * as user from "@/store/modules/user";
import * as websocket from "@/store/modules/websocket";
import * as notification from "@/store/modules/notification";

export default createStore({
  modules: {
    chat,
    chatSession,
    languages,
    shifts,
    tickets,
    user,
    token,
    websocket,
    notification,
  },
  strict: false,
});
