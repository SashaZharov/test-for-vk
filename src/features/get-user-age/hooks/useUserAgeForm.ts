// useFormWithValidation.ts
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { yupSchema } from "../lib/schema";

export const useUserAgeForm = () => {
  return useForm({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(yupSchema),
  });
};
