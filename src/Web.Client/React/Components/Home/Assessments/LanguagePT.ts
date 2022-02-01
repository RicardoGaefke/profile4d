// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Avaliações',
  tabs: {
    available: 'Disponíveis',
    canceled: 'Canceladas',
    expired: 'Vencidas',
  },
  item: {
    header: {
      action: 'Ações',
    },
    status: {
      0: {
        text: 'Disponível',
        title: 'Você já pode iniciar esta avaliação',
      },
      1: {
        text: 'Incompleta',
        title: 'Você já iniciou esta avaliação, mas ainda não terminou',
      },
      2: {
        text: 'Expirada',
        title: 'Você iniciou esta avaliação, mas não concluiu dentro do prazo',
      },
      3: {
        text: 'Cancelada',
        title: 'Esta avaliação foi cancelada por quem enviou a chave',
      },
      4: {
        text: 'Vencida',
        title: 'Esta avaliação foi concluída há mais de 180 dias',
      },
      5: {
        text: 'Completa',
        title: 'Você já pode conferir o relatório',
      },
    },
    expiration: 'Validade:',
    action: {
      start: {
        text: 'Iniciar',
        title: 'Inicie esta avaliação',
      },
      continue: {
        text: 'Continuar',
        title: 'Finalizar esta avaliação',
      },
      report: {
        text: 'Relatório',
        title: 'Conferir meu relatório',
      },
    },
  },
} as ILanguage;
