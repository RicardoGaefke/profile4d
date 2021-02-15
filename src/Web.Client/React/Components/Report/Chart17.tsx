import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';

export interface Chart17Props {
  profiles: IProfiles[];
}

const Chart17 = (props: Chart17Props): JSX.Element => {
  const { profiles = [] } = props;

  const prestativo = profiles.filter((item): boolean => item.Name === 'Perfil Prestativo')[0];
  const visionario = profiles.filter((item): boolean => item.Name === 'Perfil Visionário')[0];
  const mediador = profiles.filter((item): boolean => item.Name === 'Perfil Mediador')[0];

  // eslint-disable-next-line max-len
  const vermelho = parseFloat(((prestativo.Total / 165) * 100).toFixed(2)) + parseFloat(((visionario.Total / 165) * 100).toFixed(2)) + parseFloat(((mediador.Total / 165) * 100).toFixed(2));

  const criativo = profiles.filter((item): boolean => item.Name === 'Perfil Criativo')[0];
  const organizador = profiles.filter((item): boolean => item.Name === 'Perfil Organizador')[0];

  // eslint-disable-next-line max-len
  const verde = parseFloat(((visionario.Total / 165) * 100).toFixed(2)) + parseFloat(((criativo.Total / 165) * 100).toFixed(2)) + parseFloat(((organizador.Total / 165) * 100).toFixed(2));

  const planejador = profiles.filter((item): boolean => item.Name === 'Perfil Planejador')[0];
  const analitico = profiles.filter((item): boolean => item.Name === 'Perfil Analítico')[0];

  // eslint-disable-next-line max-len
  const azul = parseFloat(((planejador.Total / 165) * 100).toFixed(2)) + parseFloat(((analitico.Total / 165) * 100).toFixed(2)) + parseFloat(((organizador.Total / 165) * 100).toFixed(2));

  const comandante = profiles.filter((item): boolean => item.Name === 'Perfil Comandante')[0];
  const realizador = profiles.filter((item): boolean => item.Name === 'Perfil Realizador')[0];

  // eslint-disable-next-line max-len
  const amarelo = parseFloat(((organizador.Total / 165) * 100).toFixed(2)) + parseFloat(((comandante.Total / 165) * 100).toFixed(2)) + parseFloat(((realizador.Total / 165) * 100).toFixed(2));

  const data = {
    labels: ['Energia por área de atuação'],
    datasets: [
      {
        label: `Relacionamento - ${vermelho.toFixed(2)}%`,
        data: [
          vermelho.toFixed(2),
        ],
        backgroundColor: [
          '#e04d53',
        ],
      },
      {
        label: `Execução e controle - ${amarelo.toFixed(2)}%`,
        data: [
          amarelo.toFixed(2),
        ],
        backgroundColor: [
          '#fee433',
        ],
      },
      {
        label: `Inovação e Criatividade - ${verde.toFixed(2)}%`,
        data: [
          verde.toFixed(2),
        ],
        backgroundColor: [
          '#6bd78b',
        ],
      },
      {
        label: `Planejamento - ${azul.toFixed(2)}%`,
        data: [
          azul.toFixed(2),
        ],
        backgroundColor: [
          '#43a9d7',
        ],
      },
    ],
  };

  return (
    <HorizontalBar
      data={data}
      options={{
        scales: {
          xAxes: [{
            ticks: {
              min: 0,
              max: 100,
            },
          }],
        },
        legend: {
          position: 'bottom',
        },
      }}
    />
  );
};

Chart17.displayName = 'Chart17';

export default Chart17;
