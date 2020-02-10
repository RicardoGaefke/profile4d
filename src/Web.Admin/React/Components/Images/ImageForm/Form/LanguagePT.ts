// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Dados estáticos da primeira página do relatório',
  textPT: {
    text: 'Descrição em Português',
    title: 'Texto da descrição em Português',
    required: 'Este campo é obrigatório',
    min: 'Digite ao menos cinco caracteres',
    max: 'Digite no máximo 3000 caracteres',
  },
  textENG: {
    text: 'Descrição em Inglês',
    title: 'Texto da descrição em Inglês',
    required: 'Este campo é obrigatório',
    min: 'Digite ao menos cinco caracteres',
    max: 'Digite no máximo 3000 caracteres',
  },
  file: {
    title: 'Selecione um arquivo .PNG',
    required: 'Este campo é obrigatório',
    type: 'Apenas arquivos .PNG são aceitos',
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
  attachment: {
    uploads: 'Uploads',
    save: 'Salvar',
    dropzoneText: 'Arraste e solte um arquivo JPG ou PNG de até 300kb cada ou clique',
    noAttachments: 'Nenhum arquivo anexo!',
  },
} as ILanguage;
