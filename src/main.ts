import { createApp } from "vue";

import { registerPlugins } from "@/plugins";

import App from "./App.vue";

import "@unocss/reset/tailwind.css";
import "uno.css";
import "./style.css";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
