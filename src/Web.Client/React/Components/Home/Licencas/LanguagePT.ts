// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Enviar chave individual',
  alert: {
    title: 'Atenção!',
    text: 'Por favor confira o email digitado! Não será possível editá-lo após concluir a operação!',
  },
  email: {
    text: 'Email',
    title: 'Informe o email que deve receber a licença',
    required: 'Este campo é obrigatório',
    email: 'Email inválido',
  },
  confirmEmail: {
    text: 'Confirme o email',
    title: 'Confirme o email que deve receber a licença',
    required: 'Este campo é obrigatório',
    confirm: 'Email e Confirmar Email não batem',
  },
  button: {
    text: 'Enviar',
    title: 'Clique aqui para enviar uma chave para o email digitado',
  },
  feedback: {
    success: 'Chave enviada com sucesso!',
    failure: 'Desculpe, chave não enviada. Certifique-se que possui licenças disponíveis',
  },
} as ILanguage;
