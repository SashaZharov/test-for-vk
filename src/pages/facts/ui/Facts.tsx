import { FC } from "react";
import { Panel, PanelHeader, NavIdProps, Group } from "@vkontakte/vkui";
import { FactsForm } from "../../../features/get-facts/";

export const Facts: FC<NavIdProps> = ({ id }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Факты</PanelHeader>
      <Group>
        <FactsForm />
      </Group>
    </Panel>
  );
};
