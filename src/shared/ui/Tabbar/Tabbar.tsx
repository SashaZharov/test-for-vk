import { MouseEvent, FC, useMemo } from "react";
import {
  useAdaptivityConditionalRender,
  Tabbar as VKUITabbar,
  TabbarItem,
} from "@vkontakte/vkui";
import {
  Icon28Cards2Outline,
  Icon28UserRectangleHorizontalOutline,
} from "@vkontakte/icons";
import { Story } from "@shared/types";

interface TabbarProps {
  activeStory: string;
  onStoryChange: (
    event: MouseEvent<HTMLElement, globalThis.MouseEvent>
  ) => void;
}

export const Tabbar: FC<TabbarProps> = ({ onStoryChange, activeStory }) => {
  const { viewWidth } = useAdaptivityConditionalRender();
  const factsIcon = useMemo(() => <Icon28Cards2Outline />, []);
  const userAgeIcon = useMemo(
    () => <Icon28UserRectangleHorizontalOutline />,
    []
  );

  return (
    viewWidth.tabletMinus && (
      <VKUITabbar className={viewWidth.tabletMinus.className}>
        <TabbarItem
          onClick={onStoryChange}
          selected={activeStory === Story.FACTS}
          data-story={Story.FACTS}
          text="Факты"
        >
          {factsIcon}
        </TabbarItem>
        <TabbarItem
          onClick={onStoryChange}
          selected={activeStory === Story.USER_AGE}
          data-story={Story.USER_AGE}
          text="Возраст"
        >
          {userAgeIcon}
        </TabbarItem>
      </VKUITabbar>
    )
  );
};
