// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Alterar nome do usuário',
  name: {
    text: 'Novo nome',
    title: 'Informe o nome a ser cadastrado',
    required: 'Este campo é obrigatório',
    min: 'Tamanho mínimo de 6 caracteres',
    max: 'Tamanho mínimo de 20 caracteres',
  },
  password: {
    text: 'Confirme com a senha',
    title: 'Digite tua senha para confirmar a operação',
    required: 'Este campo é obrigatório',
    min: 'Tamanho mínimo de 6 caracteres',
    max: 'Tamanho mínimo de 20 caracteres',
  },
  button: {
    text: 'Salvar novo nome',
    title: 'Clique aqui para salvar as alterações',
  },
  alert: {
    title: 'Atenção às alterações de cadastro',
    text: `Alterar informações cadastrais <strong>desconecta o usuário imediatamente</strong>,
    para que uma nova credencial seja carregada com as informações atualizadas`,
  },
  feedback: {
    success: 'Dados salvos com sucesso',
    failure: 'Não foi possível salvar tuas alterações! Provavelmente a senha está incorreta!',
  },
} as ILanguage;
