import { FC, useState } from "react";
import { Group, Header } from "@vkontakte/vkui";
import { UserAgeForm } from "../ui/UserAgeForm";
import { UserAgeCard } from "../ui/UserAgeCard";

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
