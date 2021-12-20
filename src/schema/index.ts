import * as yup from "yup";

export const schema = yup.object().shape({
    cep: yup.string().min(8,"Digite 8 Caracteres").max(9).required("Digite Seu Cep"),
});