import { Button, Textarea, FormItem } from "@vkontakte/vkui";
import { FC, FormEvent, useCallback, useEffect, useRef, useState } from "react";
import { useFactsQuery } from "../hooks";
import { findEndFirstWord } from "../lib";

export const FactsForm: FC = () => {
  const [isDataFetching, setIsDataFetching] = useState(true);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const { refetch } = useFactsQuery();

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setIsDataFetching(true);

      refetch()
        .then((newData) => {
          if (textareaRef.current) {
            textareaRef.current.value = newData.data as string;
          }
        })
        .catch((error) => console.error("Error refetching data:", error))
        .finally(() => setIsDataFetching(false));
    },
    [refetch]
  );

  useEffect(() => {
    if (textareaRef.current && !isDataFetching) {
      const firstSpaceIndex = findEndFirstWord(textareaRef.current.value);
      textareaRef.current.focus();
      textareaRef.current.setSelectionRange(firstSpaceIndex, firstSpaceIndex);
    }
  }, [isDataFetching]);

  return (
    <form onSubmit={handleSubmit}>
      <FormItem htmlFor="fact" top="Факт">
        <Textarea
          id="fact"
          disabled={isDataFetching}
          getRef={textareaRef}
          rows={5}
        />
      </FormItem>
      <FormItem>
        <Button size="l" stretched type="submit">
          Получить
        </Button>
      </FormItem>
    </form>
  );
};
