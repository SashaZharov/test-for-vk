import { Panel, PanelHeader, NavIdProps, View } from "@vkontakte/vkui";
import { FC } from "react";
import { GetFacts } from "features/get-facts";
import { Story } from "shared/types";

export const Facts: FC<NavIdProps> = ({ id }) => {
  return (
    <View id={id} activePanel={id as Story}>
      <Panel id={id}>
        <PanelHeader>Факты</PanelHeader>
        <GetFacts />
      </Panel>
    </View>
  );
};
