import { MouseEvent, FC } from "react";
import {
  useAdaptivityConditionalRender,
  Tabbar as VKUITabbar,
  TabbarItem,
} from "@vkontakte/vkui";
import { Icon28NewsfeedOutline, Icon28ServicesOutline } from "@vkontakte/icons";

import { Story } from "../../types";

interface TabbarProps {
  activeStory: string;
  onStoryChange: (
    event: MouseEvent<HTMLElement, globalThis.MouseEvent>
  ) => void;
}

export const Tabbar: FC<TabbarProps> = ({ onStoryChange, activeStory }) => {
  const { viewWidth } = useAdaptivityConditionalRender();

  return (
    viewWidth.tabletMinus && (
      <VKUITabbar className={viewWidth.tabletMinus.className}>
        <TabbarItem
          onClick={onStoryChange}
          selected={activeStory === Story.FACTS}
          data-story={Story.FACTS}
          text="Факты"
        >
          <Icon28NewsfeedOutline />
        </TabbarItem>
        <TabbarItem
          onClick={onStoryChange}
          selected={activeStory === Story.USER_AGE}
          data-story={Story.USER_AGE}
          text="Возраст"
        >
          <Icon28ServicesOutline />
        </TabbarItem>
      </VKUITabbar>
    )
  );
};
