import * as yup from "yup";

export const yupSchema = yup.object().shape({
  name: yup
    .string()
    .matches(
      /^[A-Za-z]+$/,
      "Имя должно содержать только буквы латинского алфавита"
    ),
});
