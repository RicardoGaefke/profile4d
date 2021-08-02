// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Dados estáticos do Quem eu sou? (sabotador) do relatório',
  titlePT: {
    text: 'Título em Português',
    title: 'Título do relatório em Português',
    required: 'Este campo é obrigatório',
    min: 'Digite ao menos cinco caracteres',
    max: 'Digite no máximo 95 caracteres',
  },
  titleENG: {
    text: 'Título em Inglês',
    title: 'Título do relatório em Inglês',
    required: 'Este campo é obrigatório',
    min: 'Digite ao menos cinco caracteres',
    max: 'Digite no máximo 95 caracteres',
  },
  textPT: {
    text: 'Texto em Português',
    title: 'Texto do relatório em Português',
    required: 'Este campo é obrigatório',
    min: 'Digite ao menos cinco caracteres',
    max: 'Digite no máximo 8000 caracteres',
  },
  textENG: {
    text: 'Texto em Inglês',
    title: 'Texto do relatório em Inglês',
    required: 'Este campo é obrigatório',
    min: 'Digite ao menos cinco caracteres',
    max: 'Digite no máximo 8000 caracteres',
  },
  button: {
    text: 'Salvar alterações',
    title: 'Clique aqui para salvar as alterações',
  },
  created: {
    name: 'Última alterações por',
    date: 'em',
  },
  feedback: {
    success: 'Alterações salvas com sucesso',
    failure: 'Desculpe, mas as informações não foram salvas',
  },
} as ILanguage;
