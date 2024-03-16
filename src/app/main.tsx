import vkBridge from "@vkontakte/vk-bridge";
import { createRoot } from "react-dom/client";
import { AppConfig } from "./AppConfig.tsx";

vkBridge.send("VKWebAppInit");

createRoot(document.getElementById("root")!).render(<AppConfig />);
