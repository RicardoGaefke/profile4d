// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Transferir chaves para consultor',
  alert: {
    title: 'Atenção!',
    text: 'Por favor confira o email digitado e o número de chaves! Não será possível editá-los após concluir a operação!',
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
  keys: {
    text: 'Número de chaves',
    title: 'Por favor informe o número de chaves a transferir',
    required: 'Este campo é obrigatório',
    invalid: 'Mínimo de 1 chave',
  },
  button: {
    text: 'Enviar',
    title: 'Clique aqui para enviar uma chave para o email digitado',
  },
  feedback: {
    success: 'Chave enviada com sucesso!',
    failure: 'Desculpe, mas as informações não foram salvas',
  },
} as ILanguage;
