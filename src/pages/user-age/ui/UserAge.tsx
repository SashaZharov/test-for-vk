import { FC, useState } from "react";
import { Panel, PanelHeader, NavIdProps, Group, Header } from "@vkontakte/vkui";
import { UserAgeCard, UserAgeForm } from "../../../features/get-user-age";

export const UserAge: FC<NavIdProps> = ({ id }) => {
  const [userAge, setUserAge] = useState("");

  return (
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
  );
};
