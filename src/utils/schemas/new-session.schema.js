import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("O campo nome é obrigatório."),
  description: yup.string().required("O campo descrição é obrigatório.")
}).required();

export default schema;