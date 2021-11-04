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
      <div className={classes.main}>
        <Container maxWidth="md">
          <Typography variant="h3" align="center" gutterBottom>
            O que nos move
          </Typography>
          <Typography variant="overline" className={classes.text} component="p" gutterBottom>
            Acreditamos que o autoconhecimento é o caminho para o desenvolvimento de todo indivíduo, consciente de seu potencial e
            único responsável por criar sua própria realidade. E mais do que isso, acreditamos na utilização de ferramentas e técnicas,
            entre elas, o MeuPerfil4d, que ajudam a promover o verdadeiro autoconhecimento e permite que o indivíduo, possa lidar
            melhor com suas emoções, pensamentos, espiritualidade, a fim de se desenvolver e tomar decisões corajosas e conscientes,
            para poder entrar em ação e transformar sua vida através do autoconhecimento.
          </Typography>
          <Typography variant="h4" align="center">
            Carlos de Souza
          </Typography>
          <Typography variant="overline" className={classes.paragraph} component="p" gutterBottom>
            Sou Carlos de Souza, mentor, especialista comportamental e criador do Método MeuPerfil4d, uma ferramenta inovadora.
          </Typography>
          <Typography variant="overline" className={classes.paragraph} component="p" gutterBottom>
            Comecei a desenvolver o Método MeuPerfil4d em 2013, inspirando-me em 6 fontes de saberes mundialmente reconhecidos:
            Neurociência, Psicologia Analítica, Psicologia Positiva, Eneagrama,  Psicologia corporal e Inteligência espiritual,
            com o objetivo de tornar o processo de desenvolvimento humano mais fácil, rápido e assertivo. Desde o seu lançamento,
            o MeuPerfil4d foi Reconhecido por profissionais que atuam na área de desenvolvimento humano, como uma das ferramentas
            mais completas e eficientes do mercado.
          </Typography>
          <Typography variant="overline" className={classes.paragraph} component="p" gutterBottom>
            Sempre fui movido pela minha inteireza e por um grande impulso de inovar. Criar possibilidades, criar realidades, criar projetos.
            Essa vontade de estar constantemente evoluindo e me desenvolvendo é a razão que me move e que aos 57 anos me fez criar o
            Assessment MeuPerfil4D.
          </Typography>
        </Container>
      </div>
    );
  },
);
