import React from 'react';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';

export interface Chart2Props {
  profiles: IProfiles[];
}

const Chart2 = (props: Chart2Props): JSX.Element => {
  const { profiles } = props;

  const comandante = profiles.filter((item): boolean => item.Name === 'Perfil Comandante')[0].Total || 0;
  const mediador = profiles.filter((item): boolean => item.Name === 'Perfil Mediador')[0].Total || 0;
  const organizador = profiles.filter((item): boolean => item.Name === 'Perfil Organizador')[0].Total || 0;
  const prestativo = profiles.filter((item): boolean => item.Name === 'Perfil Prestativo')[0].Total || 0;
  const realizador = profiles.filter((item): boolean => item.Name === 'Perfil Realizador')[0].Total || 0;
  const criativo = profiles.filter((item): boolean => item.Name === 'Perfil Criativo')[0].Total || 0;
  const analitico = profiles.filter((item): boolean => item.Name === 'Perfil Analítico')[0].Total || 0;
  const planejador = profiles.filter((item): boolean => item.Name === 'Perfil Planejador')[0].Total || 0;
  const visionario = profiles.filter((item): boolean => item.Name === 'Perfil Visionário')[0].Total || 0;

  const data = {
    labels: ['Perfis comportamentais e suas respectivas energias'],
    datasets: [
      {
        label: `Comandante ${((comandante / 165) * 100).toFixed(2)}%`,
        data: [
          ((comandante / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#ffff00',
        ],
      },
      {
        label: `Mediador ${((mediador / 165) * 100).toFixed(2)}%`,
        data: [
          ((mediador / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#ffff00',
        ],
      },
      {
        label: `Organizador ${((organizador / 165) * 100).toFixed(2)}%`,
        data: [
          ((organizador / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#ffff00',
        ],
      },
      {
        label: `Prestativo ${((prestativo / 165) * 100).toFixed(2)}%`,
        data: [
          ((prestativo / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#c00000',
        ],
      },
      {
        label: `Realizador ${((realizador / 165) * 100).toFixed(2)}%`,
        data: [
          ((realizador / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#c00000',
        ],
      },
      {
        label: `Criativo ${((criativo / 165) * 100).toFixed(2)}%`,
        data: [
          ((criativo / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#c00000',
        ],
      },
      {
        label: `Analítico ${((analitico / 165) * 100).toFixed(2)}%`,
        data: [
          ((analitico / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#002060',
        ],
      },
      {
        label: `Planejador ${((planejador / 165) * 100).toFixed(2)}%`,
        data: [
          ((planejador / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#002060',
        ],
      },
      {
        label: `Visionário ${((visionario / 165) * 100).toFixed(2)}%`,
        data: [
          ((visionario / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#002060',
        ],
      },
    ],
  };

  return (
    <Bar
      data={data}
      options={{
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
              max: 35,
            },
          }],
        },
      }}
    />
  );
};

Chart2.displayName = 'Chart2';

export default Chart2;
