import { FC, useCallback, useEffect, useState } from "react";
import { FormItem, Button, Input } from "@vkontakte/vkui";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { yupSchema } from "../model/schema";
import { useUserAgeQuery } from "../model/useUserAgeQuery";
import { IFormInput } from "./types";

export type UserAgeFormProps = {
  setUserAge: React.Dispatch<React.SetStateAction<string>>;
};

export const UserAgeForm: FC<UserAgeFormProps> = ({ setUserAge }) => {
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const [currentName, setCurrentName] = useState("");

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(yupSchema),
  });

  const watchName = watch("name") || "";
  const { refetch } = useUserAgeQuery(watchName);

  const onSubmit: SubmitHandler<IFormInput> = useCallback(async () => {
    if (watchName != currentName) {
      await refetch().then((data) => {
        setCurrentName(watchName);
        setUserAge(data.data);
      });
    }
  }, [currentName, refetch, setUserAge, watchName]);

  useEffect(() => {
    if (watchName && !timeoutId) {
      const id = setTimeout(() => {
        handleSubmit(onSubmit)();
      }, 3000);
      setTimeoutId(id);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        setTimeoutId(null);
      }
    };
  }, [watchName, timeoutId, handleSubmit, onSubmit]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormItem htmlFor="name" top="Имя">
        <Controller
          name="name"
          control={control}
          rules={{
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Имя должно содержать только буквы латинского алфавита",
            },
          }}
          render={({ field, fieldState }) => (
            <>
              <Input
                id="name"
                value={field.value}
                onChange={(e) => {
                  field.onChange(e.target.value);
                }}
              />
              {fieldState.error && (
                <div style={{ color: "red" }}>{fieldState.error.message}</div>
              )}
            </>
          )}
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
