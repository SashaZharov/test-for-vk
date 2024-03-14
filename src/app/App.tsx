import { useState, MouseEvent } from "react";
import {
  Epic,
  SplitCol,
  SplitLayout,
  PanelHeader,
  usePlatform,
  useAdaptivityConditionalRender,
} from "@vkontakte/vkui";

import { Facts } from "../pages/facts";
import { UserAge } from "../pages/user-age";
import { Sidebar, Tabbar } from "../shared/ui";
import { Story } from "../shared/types";

export const App = () => {
  const platform = usePlatform();
  const [activeStory, setActiveStory] = useState(Story.FACTS);
  const { tabletPlus, tabletMinus } =
    useAdaptivityConditionalRender().viewWidth;

  const hasHeader = platform !== "vkcom";

  const onStoryChange = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    const element = e.currentTarget;
    const newActiveStory = element.dataset.story;
    if (newActiveStory) setActiveStory(newActiveStory as Story);
  };

  return (
    <SplitLayout
      header={hasHeader && <PanelHeader delimiter="none" />}
      className="Splitlayout"
    >
      {tabletPlus && (
        <SplitCol
          className={tabletPlus.className}
          fixed
          width={280}
          maxWidth={280}
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
