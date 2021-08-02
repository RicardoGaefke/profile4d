// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Esta é uma pergunta modelo. Supondo que esta seja mesmo uma pergunta modelo, você concorda?',
  options: {
    disagreeStrongly: 'Discordo totalmente',
    disagreePartially: 'Discordo parcialmente',
    noAgreeOrDisagree: 'Não concordo nem discordo',
    agreePartially: 'Concordo parcialmente',
    agreeStrongly: 'Concordo totalmente',
  },
  error: 'Este campo é obrigatório',
  buttonConfirm: 'Confirmar',
  buttonReset: 'Limpar',
} as ILanguage;
