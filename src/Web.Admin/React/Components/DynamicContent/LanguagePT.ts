// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Dados estáticos da introdução do relatório',
  titlePT: {
    text: 'Título em Português',
    title: 'Título do relatório em Português',
    required: 'Este campo é obrigatório',
    min: 'Digite ao menos três caracteres',
    max: 'Digite no máximo 95 caracteres',
  },
  titleENG: {
    text: 'Título em Inglês',
    title: 'Título do relatório em Inglês',
    required: 'Este campo é obrigatório',
    min: 'Digite ao menos três caracteres',
    max: 'Digite no máximo 95 caracteres',
  },
  textPT: {
    text: 'Texto em Português',
    title: 'Texto do relatório em Português',
    required: 'Este campo é obrigatório',
    min: 'Digite ao menos cinco caracteres',
    max: 'Digite no máximo 950 caracteres',
  },
  textENG: {
    text: 'Texto em Inglês',
    title: 'Texto do relatório em Inglês',
    required: 'Este campo é obrigatório',
    min: 'Digite ao menos cinco caracteres',
    max: 'Digite no máximo 950 caracteres',
  },
  button: {
    text: 'Salvar alterações',
    title: 'Clique aqui para salvar as alterações',
  },
  category: {
    title: 'Escolha uma categoria',
    text: 'Categoria',
    text1: 'Perfil Organizador',
    text2: 'Perfil Prestativo',
    text3: 'Perfil Realizador',
    text4: 'Perfil Criativo',
    text5: 'Perfil Analítico',
    text6: 'Perfil Planejador',
    text7: 'Perfil Visionário',
    text8: 'Perfil Comandante',
    text9: 'Perfil Mediador',
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
