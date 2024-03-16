import { FC } from "react";
import { Group } from "@vkontakte/vkui";
import { FactsForm } from "../ui";

export const GetFacts: FC = () => {
  return (
    <Group>
      <FactsForm />
    </Group>
  );
};
