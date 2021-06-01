import React from 'react';
import { Pie } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';

export interface Chart1Props {
  profiles: IProfiles[];
}

const Chart1 = (props: Chart1Props): JSX.Element => {
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

  // eslint-disable-next-line max-len
  const amarelo = parseFloat(((comandante / 165) * 100).toFixed(2)) + parseFloat(((mediador / 165) * 100).toFixed(2)) + parseFloat(((organizador / 165) * 100).toFixed(2));

  // eslint-disable-next-line max-len
  const vermelho = parseFloat(((prestativo / 165) * 100).toFixed(2)) + parseFloat(((realizador / 165) * 100).toFixed(2)) + parseFloat(((criativo / 165) * 100).toFixed(2));

  // eslint-disable-next-line max-len
  const azul = parseFloat(((analitico / 165) * 100).toFixed(2)) + parseFloat(((planejador / 165) * 100).toFixed(2)) + parseFloat(((visionario / 165) * 100).toFixed(2));

  const data = {
    datasets: [{
      data: [vermelho.toFixed(2), amarelo.toFixed(2), azul.toFixed(2)],
      backgroundColor: [
        '#c00000',
        '#ffff00',
        '#002060',
      ],
    }],
    labels: [
      `${vermelho.toFixed(2)}%`,
      `${amarelo.toFixed(2)}%`,
      `${azul.toFixed(2)}%`,
    ],
  };

  return (
    <Pie
      type="pie"
      options={{
        legend: {
          position: 'bottom',
        },
      }}
      data={data}
    />
  );
};

Chart1.displayName = 'Chart1';

export default Chart1;
