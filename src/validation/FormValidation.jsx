import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(4, "Nome com no mínimo 4 caracteres")
    .max(100, "Nome com no máximo 100 caracteres")
    .required("Nome completo é obrigatório"),
  email: Yup.string()
    .email("Formato de e-mail inválido, name@... ")
    .required("E-mail é obrigatório"),
  message: Yup.string()
    .min(20, "Menssagem com no mínimo 20 caracteres")
    .required("Messagem é obrigatório"),
});
