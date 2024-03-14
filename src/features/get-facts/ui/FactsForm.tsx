import { FC, FormEvent, useEffect, useRef, useState } from "react";
import { Button, Textarea, FormItem } from "@vkontakte/vkui";
import { getFacts } from "../../../shared/api";
import { useQuery } from "@tanstack/react-query";

export const FactsForm: FC = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [fact, setFact] = useState("");
  const [editFlag, setEditFlag] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const { refetch } = useQuery({
    queryKey: ["fact"],
    queryFn: getFacts,
    enabled: false,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsDisabled(true);
    setEditFlag(false);

    refetch()
      .then((newData) => setFact(newData.data))
      .catch((error) => console.error("Error refetching data:", error))
      .finally(() => setIsDisabled(false));
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setEditFlag(true);
    setFact(newText);
  };

  useEffect(() => {
    if (textareaRef.current && fact !== undefined && !editFlag) {
      textareaRef.current.focus();
      const firstSpaceIndex = fact.indexOf(" ");
      if (firstSpaceIndex !== -1) {
        textareaRef.current.setSelectionRange(firstSpaceIndex, firstSpaceIndex);
      }
    }
  }, [fact, editFlag]);

  return (
    <form onSubmit={handleSubmit}>
      <FormItem htmlFor="fact" top="Факт">
        <Textarea
          id="fact"
          disabled={isDisabled}
          value={fact}
          getRef={textareaRef}
          rows={4}
          onChange={(e) => handleTextareaChange(e)}
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
