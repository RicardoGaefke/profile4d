// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Alterar email do usuário',
  email: {
    text: 'Informe teu novo email',
    title: 'Informe teu novo email',
    required: 'Este campo é obrigatório',
    invalid: 'Email inválido',
  },
  confirmEmail: {
    text: 'Confirme teu novo email',
    title: 'Confirme teu novo email',
    required: 'Este campo é obrigatório',
    invalid: 'Digite exatamente o mesmo email',
  },
  blockedEmail: {
    title: 'Desculpe, email bloqueado!',
    text: 'Este email foi recusado pelo servidor. Talvez já esteja em uso por outro usuário.',
  },
  password: {
    text: 'Confirme com a senha',
    title: 'Digite tua senha para confirmar a operação',
    required: 'Este campo é obrigatório',
    min: 'Tamanho mínimo de 6 caracteres',
    max: 'Tamanho mínimo de 20 caracteres',
  },
  button: {
    text: 'Salvar novo email',
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
