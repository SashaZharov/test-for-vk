import vkBridge, {
  parseURLSearchParamsForGetLaunchParams,
} from "@vkontakte/vk-bridge";
import {
  useAdaptivity,
  useAppearance,
  useInsets,
} from "@vkontakte/vk-bridge-react";
import { AdaptivityProvider, ConfigProvider, AppRoot } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { transformVKBridgeAdaptivity } from "./utils";
import { App } from "./App";
import { QueryClient } from "@tanstack/react-query";

export const AppConfig = () => {
  const vkBridgeAppearance = useAppearance() || undefined;
  const vkBridgeInsets = useInsets() || undefined;
  const adaptivity = transformVKBridgeAdaptivity(useAdaptivity());
  const { vk_platform } = parseURLSearchParamsForGetLaunchParams(
    window.location.search
  );
  const queryClient = new QueryClient();

  return (
    <ConfigProvider
      appearance={vkBridgeAppearance}
      platform={vk_platform === "desktop_web" ? "vkcom" : undefined}
      isWebView={vkBridge.isWebView()}
    >
      <AdaptivityProvider {...adaptivity}>
        <AppRoot mode="full" safeAreaInsets={vkBridgeInsets}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};
