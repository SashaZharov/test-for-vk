import { FC, useState } from "react";
import {
  Panel,
  PanelHeader,
  NavIdProps,
  Group,
  Header,
  View,
} from "@vkontakte/vkui";
import { UserAgeCard, UserAgeForm } from "../../../features/get-user-age";
import { Story } from "../../../shared/types";

export const UserAge: FC<NavIdProps> = ({ id }) => {
  const [userAge, setUserAge] = useState("");

  return (
    <View id={id} activePanel={id as Story}>
      <Panel id={id}>
        <PanelHeader>Возраст</PanelHeader>
        <Group>
          <UserAgeForm setUserAge={setUserAge} />
          <Group
            mode="plain"
            header={<Header mode="secondary">Ваш возраст:</Header>}
          >
            <UserAgeCard userAge={userAge} />
          </Group>
        </Group>
      </Panel>
    </View>
  );
};
