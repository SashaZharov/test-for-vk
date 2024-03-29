import { useQueryClient } from "@tanstack/react-query";
import { FormItem, Button, Input } from "@vkontakte/vkui";
import { FC, useCallback, useEffect, useState } from "react";
import { SubmitHandler, Controller } from "react-hook-form";
import { useUserAgeForm } from "../../hooks/useUserAgeForm";
import { useUserAgeQuery } from "../../hooks/useUserAgeQuery";
import { FormInputType } from "../types";
import "./UserAgeFrom.css";

export type UserAgeFormProps = {
  setUserAge: React.Dispatch<React.SetStateAction<string>>;
};

const INPUT_DELAY = 3000;

export const UserAgeForm: FC<UserAgeFormProps> = ({ setUserAge }) => {
  const [currentName, setCurrentName] = useState("");
  const { control, handleSubmit, watch } = useUserAgeForm();
  const watchName = watch("name") || "";
  const { refetch } = useUserAgeQuery(watchName);
  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<FormInputType> = useCallback(async () => {
    if (watchName != currentName) {
      queryClient.cancelQueries({ queryKey: ["user-age"] });
      await refetch().then((data) => {
        setCurrentName(watchName);
        setUserAge(data.data);
      });
    }
  }, [currentName, queryClient, refetch, setUserAge, watchName]);

  useEffect(() => {
    let timerId: number;
    if (watchName) {
      timerId = setTimeout(() => {
        handleSubmit(onSubmit)();
      }, INPUT_DELAY);
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [watchName, handleSubmit, onSubmit]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormItem htmlFor="name" top="Имя">
        <Controller
          name="name"
          control={control}
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
                <div className="UserAgeForm__errorMessage">
                  {fieldState.error.message}
                </div>
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
