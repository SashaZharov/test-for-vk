import { Group, Header } from "@vkontakte/vkui";
import { FC, useState } from "react";
import { UserAgeCard } from "../ui/UserAgeCard";
import { UserAgeForm } from "../ui/UserAgeForm";

export const GetUserAge: FC = () => {
  const [userAge, setUserAge] = useState("");

  return (
    <Group>
      <UserAgeForm setUserAge={setUserAge} />
      <Group
        mode="plain"
        header={<Header mode="secondary">Ваш возраст:</Header>}
      >
        <UserAgeCard userAge={userAge} />
      </Group>
    </Group>
  );
};
