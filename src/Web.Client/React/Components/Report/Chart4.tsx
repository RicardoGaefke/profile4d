import React from 'react';
import { Radar } from 'react-chartjs-2';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';

export interface Chart4Props {
  profiles: IProfiles[];
}

const Chart4 = (props: Chart4Props): JSX.Element => {
  const { profiles = [] } = props;

  const criativo = profiles.filter((item): boolean => item.Name === 'Perfil Criativo')[0];
  const realizador = profiles.filter((item): boolean => item.Name === 'Perfil Realizador')[0];
  const prestativo = profiles.filter((item): boolean => item.Name === 'Perfil Prestativo')[0];
  const organizador = profiles.filter((item): boolean => item.Name === 'Perfil Organizador')[0];
  const mediador = profiles.filter((item): boolean => item.Name === 'Perfil Mediador')[0];
  const comandante = profiles.filter((item): boolean => item.Name === 'Perfil Comandante')[0];
  const visionario = profiles.filter((item): boolean => item.Name === 'Perfil Visionário')[0];
  const planejador = profiles.filter((item): boolean => item.Name === 'Perfil Planejador')[0];
  const analitico = profiles.filter((item): boolean => item.Name === 'Perfil Analítico')[0];

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
    labels: [
      `${criativo.Name} ${((criativo.Total / 165) * 100).toFixed(2)}%`,
      `${realizador.Name} ${((realizador.Total / 165) * 100).toFixed(2)}%`,
      `${prestativo.Name} ${((prestativo.Total / 165) * 100).toFixed(2)}%`,
      `${organizador.Name} ${((organizador.Total / 165) * 100).toFixed(2)}%`,
      `${mediador.Name} ${((mediador.Total / 165) * 100).toFixed(2)}%`,
      `${comandante.Name} ${((comandante.Total / 165) * 100).toFixed(2)}%`,
      `${visionario.Name} ${((visionario.Total / 165) * 100).toFixed(2)}%`,
      `${planejador.Name} ${((planejador.Total / 165) * 100).toFixed(2)}%`,
      `${analitico.Name} ${((analitico.Total / 165) * 100).toFixed(2)}%`,
    ],
    datasets: [
      {
        label: 'Tríade original',
        backgroundColor: 'rgba(31,15,250,0.2)',
        borderColor: 'rgba(31,15,250,0.7)',
        pointColor: 'rgba(31,15,250,1)',
        spanGaps: true,
        data: [
          (vermelho.Name === 'Perfil Criativo') ? ((vermelho.Total / 165) * 100).toFixed(2) : null,
          (vermelho.Name === 'Perfil Realizador') ? ((vermelho.Total / 165) * 100).toFixed(2) : null,
          (vermelho.Name === 'Perfil Prestativo') ? ((vermelho.Total / 165) * 100).toFixed(2) : null,
          (amarelo.Name === 'Perfil Organizador') ? ((amarelo.Total / 165) * 100).toFixed(2) : null,
          (amarelo.Name === 'Perfil Mediador') ? ((amarelo.Total / 165) * 100).toFixed(2) : null,
          (amarelo.Name === 'Perfil Comandante') ? ((amarelo.Total / 165) * 100).toFixed(2) : null,
          (azul.Name === 'Perfil Visionário') ? ((azul.Total / 165) * 100).toFixed(2) : null,
          (azul.Name === 'Perfil Planejador') ? ((azul.Total / 165) * 100).toFixed(2) : null,
          (azul.Name === 'Perfil Analítico') ? ((azul.Total / 165) * 100).toFixed(2) : null,
        ],
      },
    ],
  };

  return (
    <Radar
      data={data}
      options={{
        scale: {
          ticks: {
            min: 0,
            max: 35,
          },
        },
      }}
    />
  );
};

Chart4.displayName = 'Chart4';

export default Chart4;
