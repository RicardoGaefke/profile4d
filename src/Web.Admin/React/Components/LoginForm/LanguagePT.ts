// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Já é um usuário?',
  email: {
    text: 'Teu email',
    title: 'Informe teu email',
    required: 'Este campo é obrigatório',
    invalid: 'Email inválido',
  },
  password: {
    text: 'Tua senha',
    title: 'Informe tua senha',
    required: 'Este campo é obrigatório',
    min: 'Tamanho mínimo de 6 caracteres',
    max: 'Tamanho mínimo de 20 caracteres',
  },
  forgot: {
    text: 'Esqueceu a senha?',
    title: 'Clique aqui para gerar uma nova senha',
  },
  button: {
    text: 'Entrar no sistema',
    title: 'Clique aqui para iniciar a sessão',
  },
  keep: {
    text: 'Manter-me conectado?',
    title: 'Marque esta opção para permanecer conectado',
  },
  create: {
    text: 'Criar credenciais de acesso',
    title: 'Clique aqui para fazer teu cadastro',
  },
  feedback: {
    success: 'Você fez login com sucesso',
    failure: 'Não foi possível fazer login',
  },
} as ILanguage;
