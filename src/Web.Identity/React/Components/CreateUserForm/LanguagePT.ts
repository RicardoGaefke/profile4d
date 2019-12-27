// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Criar conta de usuário',
  name: {
    text: 'Informe teu nome',
    title: 'Informe teu nome',
    required: 'O campo nome é obrigatório',
    min: 'Mínimo de 5 caracteres',
    max: 'Máximo de 20 caracteres',
  },
  email: {
    text: 'Informe teu email',
    title: 'Informe teu email',
    required: 'Este campo é obrigatório',
    invalid: 'Email inválido',
  },
  confirmEmail: {
    text: 'Confirme teu email',
    title: 'Confirme teu email',
    required: 'Este campo é obrigatório',
    invalid: 'Digite exatamente o mesmo email',
  },
  password: {
    text: 'Crie uma senha',
    title: 'Crie uma senha',
    required: 'Este campo é obrigatório',
    min: 'Tamanho mínimo de 6 caracteres',
    max: 'Tamanho mínimo de 20 caracteres',
  },
  confirmPassword: {
    text: 'Confirme a tua senha',
    title: 'Confirme a tua senha',
    required: 'Este campo é obrigatório',
    invalid: 'Digite exatamente a mesma senha',
  },
  button: {
    text: 'Criar conta',
    title: 'Clique aqui para criar uma conta',
  },
  return: {
    text: 'Cancelar e voltar ao início',
    title: 'Cancelar e voltar ao início',
  },
} as ILanguage;
