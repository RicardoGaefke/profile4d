import React from 'react';
// eslint-disable-next-line no-unused-vars
import { withTranslation, WithTranslation } from 'react-i18next';
import {
  Typography, Container,
} from '@material-ui/core';
import useStyles from './Styles';
import setLanguage from './Language';

export default withTranslation()(
  (props: WithTranslation): React.ReactElement<WithTranslation> => {
    // eslint-disable-next-line no-unused-vars
    const { t } = props;
    const classes = useStyles({});
    setLanguage();

    return (
      <Container maxWidth="md" className={classes.main}>
        <Typography variant="overline" className={classes.text} component="p">
          Conhecer e dominar o próprio comportamento é aspecto fundamental para o êxito profissional. Pesquisas atuais apontam que, cada vez mais,
          as empresas contratam, promovem e demitem profissionais pautadas em aspectos comportamentais. É mais fácil corrigir carências técnicas
          dos profissionais que tentar reverter um comportamento improdutivo.
        </Typography>
        <Typography variant="overline" className={classes.paragraph} component="p">
          Em menos de 25 minutos, é possível ter acesso a dados reais sobre sua tríade comportamental para reconhecer e estimular potencialidades
          e mudar comportamentos sabotadores.
        </Typography>
        <Typography variant="overline" className={classes.paragraph} component="p">
          O software gera um relatório, descrevendo os traços mais marcantes de sua personalidade, inclusive aqueles que são escondidos pelos
          mecanismos de defesa ou superestimados pela tendência natural do ser humano de se sobrevalorizar.
        </Typography>
        <Typography variant="overline" className={classes.paragraph} component="p">
          Mensura em percentual, a energia de nove perfis comportamentais e identifica sua tríade comportamental, ou seja, o modo que você
          {' '}
          <strong style={{ color: '#002060' }}>pensa</strong>
          ,
          {' '}
          <strong style={{ color: '#c00000' }}>sente</strong>
          {' '}
          e
          {' '}
          <strong style={{ color: '#ffc000' }}>age</strong>
          .
        </Typography>
        <div className={classes.imgContainer}>
          <img
            title="Perfis comportamentais"
            alt="Perfis comportamentais"
            src="/img/grafico1.png"
            className={classes.img}
          />
        </div>
        <Typography variant="h4" align="center">
          TRÍADE ORIGINAL X TRÍADE ADAPTADA
        </Typography>
        <Typography variant="overline" className={classes.paragraph} component="p">
          O radar apresentado no relatório mostra sua tríade comportamental descrevendo a visão sobre quem você é, ou seja, seu estilo
          {' '}
          <strong><i>original</i></strong>
          {' '}
          de ser e, também, aponta o seu estilo
          {' '}
          <strong><i>adaptado</i></strong>
          {' '}
          e, portanto, o
          {' '}
          <strong><i>GAP</i></strong>
          {' '}
          à ser trabalhado, a fim de melhorar sua performance comportamental. Na prática você descobrirá se está utilizando a emoção
          correta antes de se comportar e, assim, saberá se o seu fluxo emocional é saudável.
        </Typography>
        <div className={classes.imgContainer}>
          <img
            title="Radar tríade"
            alt="Radar tríade"
            src="/img/grafico2.png"
            className={classes.img}
          />
        </div>
        <Typography variant="h4" align="center">
          ARQUÉTIPOS - VIRTUDES – SEMENTES (ESSÊNCIA)
        </Typography>
        <Typography variant="overline" className={classes.paragraph} component="p">
          <i>
            Inspirado nos Arquétipos Platônicos. Adaptado para Administração de Recursos Humanos e processos de mentoring e coaching pelo
            professor Carlos de Souza
          </i>
        </Typography>
        <Typography variant="overline" className={classes.paragraph} component="p">
          O objetivo de identificar o seu arquétipo (virtude/semente) tem a ver com seu propósito de vida.
        </Typography>
        <Typography variant="overline" className={classes.paragraph} component="p">
          Arquétipos de virtudes  ou arquétipos platônicos são “aspectos fundamentais do nosso inconsciênte, modelos primordiais e ancestrais,
          um conjunto de informações que trazemos conosco e que determinam o que somos essencialmente”, são eles: verdade (consigo mesmo),
          beleza, abundância, inteireza, poder, justiça, bondade, excelência e alegria.
        </Typography>
        <Typography variant="overline" className={classes.paragraph} component="p">
          Platão deixou um legado maravilhoso para as gerações futuras ao abordar os arquétipos de virtudes, (aspectos de um nível supramental
          da nossa existência, também explorados por Carl Jung) pelos quais podemos guiar a nossa vida. Quanto mais próximo estivermos dos
          arquétipos de virtudes, maiores serão as chances de vivermos nosso propósito de vida com plenitude.
        </Typography>
        <Typography variant="h4" align="center">
          Descubra o seu!
        </Typography>
      </Container>
    );
  },
);
