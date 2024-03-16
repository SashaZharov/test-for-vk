import {
  Epic,
  SplitCol,
  SplitLayout,
  PanelHeader,
  usePlatform,
  useAdaptivityConditionalRender,
} from "@vkontakte/vkui";
import { useState, MouseEvent } from "react";

import { Facts } from "pages/facts";
import { UserAge } from "pages/user-age";
import { Story } from "shared/types";
import { Sidebar, Tabbar } from "shared/ui";

const SPLIT_COL_WIDTH = 280;

export const App = () => {
  const platform = usePlatform();
  const [activeStory, setActiveStory] = useState(Story.FACTS);
  const { tabletPlus, tabletMinus } =
    useAdaptivityConditionalRender().viewWidth;

  const hasHeader = platform !== "vkcom";

  const onStoryChange = (
    event: MouseEvent<HTMLElement, globalThis.MouseEvent>
  ) => {
    const element = event.currentTarget;
    const newActiveStory = element.dataset.story;
    if (newActiveStory) setActiveStory(newActiveStory as Story);
  };

  return (
    <SplitLayout
      header={hasHeader && <PanelHeader delimiter="none" />}
      className="App__splitLayout"
    >
      {tabletPlus && (
        <SplitCol
          className={tabletPlus.className}
          fixed
          width={SPLIT_COL_WIDTH}
          maxWidth={SPLIT_COL_WIDTH}
        >
          <Sidebar activeStory={activeStory} onStoryChange={onStoryChange} />
        </SplitCol>
      )}

      <SplitCol width="100%" maxWidth="560px" stretchedOnMobile autoSpaced>
        <Epic
          activeStory={activeStory}
          tabbar={
            tabletMinus && (
              <Tabbar activeStory={activeStory} onStoryChange={onStoryChange} />
            )
          }
        >
          <Facts id={Story.FACTS} />
          <UserAge id={Story.USER_AGE} />
        </Epic>
      </SplitCol>
    </SplitLayout>
  );
};
