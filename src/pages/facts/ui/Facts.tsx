import { FC } from "react";
import { Panel, PanelHeader, NavIdProps, Group, View } from "@vkontakte/vkui";
import { FactsForm } from "../../../features/get-facts/";
import { Story } from "../../../shared/types";

export const Facts: FC<NavIdProps> = ({ id }) => {
  return (
    <View id={id} activePanel={id as Story}>
      <Panel id={id}>
        <PanelHeader>Факты</PanelHeader>
        <Group>
          <FactsForm />
        </Group>
      </Panel>
    </View>
  );
};
