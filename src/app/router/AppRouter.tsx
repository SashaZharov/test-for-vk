import {
  View,
  SplitLayout,
  SplitCol,
  Epic,
  Tabbar,
  TabbarItem,
  useAdaptivityConditionalRender,
} from "@vkontakte/vkui";

import { Facts } from "../../pages/facts";
import { UserAge } from "../../pages/user-age";
import { useState } from "react";
import { Icon28NewsfeedOutline, Icon28ServicesOutline } from "@vkontakte/icons";

export const AppRouter = () => {
  const { viewWidth } = useAdaptivityConditionalRender();
  const [activeStory, setActiveStory] = useState("facts");

  const onStoryChange = (e: any) => {
    setActiveStory(e.currentTarget.dataset.story);
  };

  return (
    <SplitLayout>
      <SplitCol>
        <Epic
          activeStory={activeStory}
          tabbar={
            viewWidth.tabletMinus && (
              <Tabbar className={viewWidth.tabletMinus.className}>
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === "facts"}
                  data-story="facts"
                  text="Факты"
                >
                  <Icon28NewsfeedOutline />
                </TabbarItem>
                <TabbarItem
                  onClick={onStoryChange}
                  selected={activeStory === "user-age"}
                  data-story="user-age"
                  text="Возраст"
                >
                  <Icon28ServicesOutline />
                </TabbarItem>
              </Tabbar>
            )
          }
        >
          <View id="facts" activePanel="facts">
            <Facts id="facts" />
          </View>
          <View id="user-age" activePanel="user-age">
            <UserAge id="user-age" />
          </View>
        </Epic>
      </SplitCol>
    </SplitLayout>
  );
};
