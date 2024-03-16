import { Group } from "@vkontakte/vkui";
import { FC } from "react";
import { FactsForm } from "../ui";

export const GetFacts: FC = () => {
  return (
    <Group>
      <FactsForm />
    </Group>
  );
};
