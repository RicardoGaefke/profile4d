// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Alterar senha do usuário',
  newPassword: {
    text: 'Nova senha',
    title: 'Informe a nova senha a ser cadastrada',
    required: 'Este campo é obrigatório',
    min: 'Tamanho mínimo de 6 caracteres',
    max: 'Tamanho mínimo de 20 caracteres',
  },
  confirmPassword: {
    text: 'Confirme a tua nova senha',
    title: 'Confirme a tua nova senha',
    required: 'Este campo é obrigatório',
    invalid: 'Digite exatamente a mesma senha',
  },
  password: {
    text: 'Confirme com a senha atual',
    title: 'Digite tua senha atual para confirmar a operação',
    required: 'Este campo é obrigatório',
    min: 'Tamanho mínimo de 6 caracteres',
    max: 'Tamanho mínimo de 20 caracteres',
  },
  button: {
    text: 'Salvar nova senha',
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
