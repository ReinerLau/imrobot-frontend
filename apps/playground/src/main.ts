import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { MyButton } from "@imrobot/components";

const name = "test";

createApp(App).use(MyButton).mount("#app");
