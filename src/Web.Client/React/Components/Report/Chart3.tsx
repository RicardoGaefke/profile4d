import React from 'react';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';

export interface Chart3Props {
  profiles: IProfiles[];
}

const Chart3 = (props: Chart3Props): JSX.Element => {
  const { profiles = [] } = props;

  const amarelos = profiles.filter((item): boolean => item.Color === 'Amarelo');
  amarelos.sort((a, b): number => b.Total - a.Total || b.InternalNumber - a.InternalNumber);
  const amarelo = amarelos[0];

  const vermelhos = profiles.filter((item): boolean => item.Color === 'Vermelho');
  vermelhos.sort((a, b): number => b.Total - a.Total || b.InternalNumber - a.InternalNumber);
  const vermelho = vermelhos[0];

  const azuis = profiles.filter((item): boolean => item.Color === 'Azul');
  azuis.sort((a, b): number => b.Total - a.Total || b.InternalNumber - a.InternalNumber);
  const azul = azuis[0];

  const data = {
    labels: ['Perfis comportamentais e suas respectivas energias'],
    datasets: [
      {
        label: amarelo.Name,
        data: [
          ((amarelo.Total / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#ffff00',
        ],
      },
      {
        label: vermelho.Name,
        data: [
          ((vermelho.Total / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#c00000',
        ],
      },
      {
        label: azul.Name,
        data: [
          ((azul.Total / 165) * 100).toFixed(2),
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

Chart3.displayName = 'Chart3';

export default Chart3;
