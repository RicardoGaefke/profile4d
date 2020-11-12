import React from 'react';
import { Bar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';

export interface Chart11Props {
  profiles: IProfiles[];
}

const Chart11 = (props: Chart11Props): JSX.Element => {
  const { profiles = [] } = props;

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Organizador')[0];

  const vermelho = profiles.filter((item): boolean => item.Name === 'Perfil Prestativo')[0];

  const azul = profiles.filter((item): boolean => item.Name === 'Perfil Planejador')[0];

  const data = {
    labels: ['Desenvolvimento de pessoas'],
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

Chart11.displayName = 'Chart11';

export default Chart11;
