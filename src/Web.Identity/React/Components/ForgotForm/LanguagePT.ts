// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Esqueceu sua senha?',
  email: {
    title: 'Teu email',
    text: 'Informe teu email',
    required: 'Este campo é obrigatório',
    invalid: 'Email inválido',
  },
  button: {
    text: 'Recuperar senha',
    title: 'Clique aqui para recuperar sua senha',
  },
  feedback: {
    success: 'Se o email enserido estiver correto, uma mensagem de instruções será enviada!',
    failure: 'Não foi possível recuperar a senha! Por favor tente novamente.',
  },
} as ILanguage;
