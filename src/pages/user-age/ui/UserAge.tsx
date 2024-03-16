import { Panel, PanelHeader, NavIdProps, View } from "@vkontakte/vkui";
import { FC } from "react";
import { GetUserAge } from "features/get-user-age";
import { Story } from "shared/types";

export const UserAge: FC<NavIdProps> = ({ id }) => {
  return (
    <View id={id} activePanel={id as Story}>
      <Panel id={id}>
        <PanelHeader>Возраст</PanelHeader>
        <GetUserAge />
      </Panel>
    </View>
  );
};
