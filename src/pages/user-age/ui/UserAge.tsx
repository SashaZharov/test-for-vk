import { FC } from "react";
import { Panel, PanelHeader, NavIdProps, View } from "@vkontakte/vkui";
import { Story } from "shared/types";
import { GetUserAge } from "features/get-user-age";

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
