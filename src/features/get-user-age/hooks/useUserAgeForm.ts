// useFormWithValidation.ts
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { yupSchema } from "../lib/schema";

export const useUserAgeForm = () => {
  return useForm({
    defaultValues: {
      name: "",
    },
    resolver: yupResolver(yupSchema),
  });
};
