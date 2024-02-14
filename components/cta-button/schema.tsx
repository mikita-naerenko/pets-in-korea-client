import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string(),
  text: Yup.string()
    .min(20, "Минимум 20 символов")
    .required("Это поле обязательное"),
  email: Yup.string().email("Некорректный адрес почты"),
});
