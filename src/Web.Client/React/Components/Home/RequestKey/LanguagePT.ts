// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Clique aqui para solicitar novas chaves',
  text: 'Solicitar mais chaves',
  request: {
    title: 'Solicitar mais chaves',
    text: 'Para adquirir mais chaves, por favor informe teu telefone e um consultor entrará em contato o mais breve possível.',
  },
  phone: {
    text: 'Telefone',
    title: 'Por favor insira o número de telefone',
  },
  cancel: {
    text: 'Cancelar',
    title: 'Cancelar e voltar à tela inicial',
  },
  confirm: {
    text: 'Confirmar',
    title: 'Confirmar e voltar à tela inicial',
  },
  feedback: {
    success: 'Mensagem enviada com sucesso!',
    failure: 'Desculpe, mas houve um erro ao enviar a mensagem!',
  },
} as ILanguage;
