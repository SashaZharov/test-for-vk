import { MouseEvent, FC, useMemo } from "react";
import classNames from "classnames";
import { Cell, Panel, Group, PanelHeader, usePlatform } from "@vkontakte/vkui";
import { Icon28Cards2Outline, Icon28ServicesOutline } from "@vkontakte/icons";

import { Story } from "../../types";
import "./Sidebar.css";

interface SidebarProps {
  activeStory: string;
  onStoryChange: (
    event: MouseEvent<HTMLElement, globalThis.MouseEvent>
  ) => void;
}

export const Sidebar: FC<SidebarProps> = ({ onStoryChange, activeStory }) => {
  const platform = usePlatform();
  const factsIcon = useMemo(() => <Icon28Cards2Outline />, []);
  const userAgeIcon = useMemo(() => <Icon28ServicesOutline />, []);

  const hasHeader = platform !== "vkcom";

  return (
    <Panel>
      {hasHeader && <PanelHeader />}
      <Group>
        <Cell
          disabled={activeStory === Story.FACTS}
          data-story={Story.FACTS}
          onClick={onStoryChange}
          before={factsIcon}
          className={classNames({
            Story__active: activeStory === Story.FACTS,
          })}
        >
          Факт
        </Cell>

        <Cell
          disabled={activeStory === Story.USER_AGE}
          data-story={Story.USER_AGE}
          before={userAgeIcon}
          onClick={onStoryChange}
          className={classNames({
            Story__active: activeStory === Story.USER_AGE,
          })}
        >
          Возраст
        </Cell>
      </Group>
    </Panel>
  );
};
