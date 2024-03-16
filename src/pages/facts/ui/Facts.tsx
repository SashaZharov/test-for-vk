import { FC } from "react";
import { Panel, PanelHeader, NavIdProps, View } from "@vkontakte/vkui";
import { Story } from "@shared/types";
import { GetFacts } from "@features/get-facts";

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
