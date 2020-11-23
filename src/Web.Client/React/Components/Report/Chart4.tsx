/* eslint-disable no-nested-ternary */
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

  // eslint-disable-next-line consistent-return
  const parceiroIdeal = (perfil: string): IProfiles => {
    if (perfil === 'Perfil Comandante') return prestativo;
    if (perfil === 'Perfil Mediador') return realizador;
    if (perfil === 'Perfil Organizador') return visionario;
    if (perfil === 'Perfil Prestativo') return analitico;
    if (perfil === 'Perfil Realizador') return planejador;
    if (perfil === 'Perfil Analítico') return comandante;
    if (perfil === 'Perfil Planejador') return mediador;
    if (perfil === 'Perfil Visionário') return criativo;
    return criativo;
  };

  const amarelos = profiles.filter((item): boolean => item.Color === 'Amarelo');
  amarelos.sort((a, b): number => b.Total - a.Total || b.InternalNumber - a.InternalNumber);
  const amarelo = amarelos[0];

  const vermelhos = profiles.filter((item): boolean => item.Color === 'Vermelho');
  vermelhos.sort((a, b): number => b.Total - a.Total || b.InternalNumber - a.InternalNumber);
  const vermelho = vermelhos[0];

  const azuis = profiles.filter((item): boolean => item.Color === 'Azul');
  azuis.sort((a, b): number => b.Total - a.Total || b.InternalNumber - a.InternalNumber);
  const azul = azuis[0];

  const original = [
    amarelo,
    vermelho,
    azul,
  ];

  original.sort((a, b): number => b.Total - a.Total || (a.ExternalNumber || 0) - (b.ExternalNumber || 0));

  const primeiro = original[0];
  const segundo = original[1];
  const terceiro = original[2];

  const dataOriginal = [
    (primeiro.Name === 'Perfil Criativo' || segundo.Name === 'Perfil Criativo' || terceiro.Name === 'Perfil Criativo')
      ? (primeiro.Name === 'Perfil Criativo') ? ((primeiro.Total / 165) * 100).toFixed(2) : null
        || (segundo.Name === 'Perfil Criativo') ? ((segundo.Total / 165) * 100).toFixed(2) : null
          || (terceiro.Name === 'Perfil Criativo') ? ((terceiro.Total / 165) * 100).toFixed(2) : null
      : null,
    (primeiro.Name === 'Perfil Realizador' || segundo.Name === 'Perfil Realizador' || terceiro.Name === 'Perfil Realizador')
      ? (primeiro.Name === 'Perfil Realizador') ? ((primeiro.Total / 165) * 100).toFixed(2) : null
        || (segundo.Name === 'Perfil Realizador') ? ((segundo.Total / 165) * 100).toFixed(2) : null
          || (terceiro.Name === 'Perfil Realizador') ? ((terceiro.Total / 165) * 100).toFixed(2) : null
      : null,
    (primeiro.Name === 'Perfil Prestativo' || segundo.Name === 'Perfil Prestativo' || terceiro.Name === 'Perfil Prestativo')
      ? (primeiro.Name === 'Perfil Prestativo') ? ((primeiro.Total / 165) * 100).toFixed(2) : null
        || (segundo.Name === 'Perfil Prestativo') ? ((segundo.Total / 165) * 100).toFixed(2) : null
          || (terceiro.Name === 'Perfil Prestativo') ? ((terceiro.Total / 165) * 100).toFixed(2) : null
      : null,
    (primeiro.Name === 'Perfil Organizador' || segundo.Name === 'Perfil Organizador' || terceiro.Name === 'Perfil Organizador')
      ? (primeiro.Name === 'Perfil Organizador') ? ((primeiro.Total / 165) * 100).toFixed(2) : null
        || (segundo.Name === 'Perfil Organizador') ? ((segundo.Total / 165) * 100).toFixed(2) : null
          || (terceiro.Name === 'Perfil Organizador') ? ((terceiro.Total / 165) * 100).toFixed(2) : null
      : null,
    (primeiro.Name === 'Perfil Mediador' || segundo.Name === 'Perfil Mediador' || terceiro.Name === 'Perfil Mediador')
      ? (primeiro.Name === 'Perfil Mediador') ? ((primeiro.Total / 165) * 100).toFixed(2) : null
        || (segundo.Name === 'Perfil Mediador') ? ((segundo.Total / 165) * 100).toFixed(2) : null
          || (terceiro.Name === 'Perfil Mediador') ? ((terceiro.Total / 165) * 100).toFixed(2) : null
      : null,
    (primeiro.Name === 'Perfil Comandante' || segundo.Name === 'Perfil Comandante' || terceiro.Name === 'Perfil Comandante')
      ? (primeiro.Name === 'Perfil Comandante') ? ((primeiro.Total / 165) * 100).toFixed(2) : null
        || (segundo.Name === 'Perfil Comandante') ? ((segundo.Total / 165) * 100).toFixed(2) : null
          || (terceiro.Name === 'Perfil Comandante') ? ((terceiro.Total / 165) * 100).toFixed(2) : null
      : null,
    (primeiro.Name === 'Perfil Visionário' || segundo.Name === 'Perfil Visionário' || terceiro.Name === 'Perfil Visionário')
      ? (primeiro.Name === 'Perfil Visionário') ? ((primeiro.Total / 165) * 100).toFixed(2) : null
        || (segundo.Name === 'Perfil Visionário') ? ((segundo.Total / 165) * 100).toFixed(2) : null
          || (terceiro.Name === 'Perfil Visionário') ? ((terceiro.Total / 165) * 100).toFixed(2) : null
      : null,
    (primeiro.Name === 'Perfil Planejador' || segundo.Name === 'Perfil Planejador' || terceiro.Name === 'Perfil Planejador')
      ? (primeiro.Name === 'Perfil Planejador') ? ((primeiro.Total / 165) * 100).toFixed(2) : null
        || (segundo.Name === 'Perfil Planejador') ? ((segundo.Total / 165) * 100).toFixed(2) : null
          || (terceiro.Name === 'Perfil Planejador') ? ((terceiro.Total / 165) * 100).toFixed(2) : null
      : null,
    (primeiro.Name === 'Perfil Analítico' || segundo.Name === 'Perfil Analítico' || terceiro.Name === 'Perfil Analítico')
      ? (primeiro.Name === 'Perfil Analítico') ? ((primeiro.Total / 165) * 100).toFixed(2) : null
        || (segundo.Name === 'Perfil Analítico') ? ((segundo.Total / 165) * 100).toFixed(2) : null
          || (terceiro.Name === 'Perfil Analítico') ? ((terceiro.Total / 165) * 100).toFixed(2) : null
      : null,
  ];

  let dataAdaptada;

  const parceiro = parceiroIdeal(primeiro.Name);

  if (parceiro.Name === segundo.Name) {
    dataAdaptada = dataOriginal;
  } else {
    dataAdaptada = [
      (primeiro.Name === 'Perfil Criativo' || parceiro.Name === 'Perfil Criativo' || terceiro.Name === 'Perfil Criativo')
        ? (primeiro.Name === 'Perfil Criativo') ? ((primeiro.Total / 165) * 100).toFixed(2) : null
          || (parceiro.Name === 'Perfil Criativo') ? ((parceiro.Total / 165) * 100).toFixed(2) : null
            || (terceiro.Name === 'Perfil Criativo') ? ((terceiro.Total / 165) * 100).toFixed(2) : null
        : null,
      (primeiro.Name === 'Perfil Realizador' || parceiro.Name === 'Perfil Realizador' || terceiro.Name === 'Perfil Realizador')
        ? (primeiro.Name === 'Perfil Realizador') ? ((primeiro.Total / 165) * 100).toFixed(2) : null
          || (parceiro.Name === 'Perfil Realizador') ? ((parceiro.Total / 165) * 100).toFixed(2) : null
            || (terceiro.Name === 'Perfil Realizador') ? ((terceiro.Total / 165) * 100).toFixed(2) : null
        : null,
      (primeiro.Name === 'Perfil Prestativo' || parceiro.Name === 'Perfil Prestativo' || terceiro.Name === 'Perfil Prestativo')
        ? (primeiro.Name === 'Perfil Prestativo') ? ((primeiro.Total / 165) * 100).toFixed(2) : null
          || (parceiro.Name === 'Perfil Prestativo') ? ((parceiro.Total / 165) * 100).toFixed(2) : null
            || (terceiro.Name === 'Perfil Prestativo') ? ((terceiro.Total / 165) * 100).toFixed(2) : null
        : null,
      (primeiro.Name === 'Perfil Organizador' || parceiro.Name === 'Perfil Organizador' || terceiro.Name === 'Perfil Organizador')
        ? (primeiro.Name === 'Perfil Organizador') ? ((primeiro.Total / 165) * 100).toFixed(2) : null
          || (parceiro.Name === 'Perfil Organizador') ? ((parceiro.Total / 165) * 100).toFixed(2) : null
            || (terceiro.Name === 'Perfil Organizador') ? ((terceiro.Total / 165) * 100).toFixed(2) : null
        : null,
      (primeiro.Name === 'Perfil Mediador' || parceiro.Name === 'Perfil Mediador' || terceiro.Name === 'Perfil Mediador')
        ? (primeiro.Name === 'Perfil Mediador') ? ((primeiro.Total / 165) * 100).toFixed(2) : null
          || (parceiro.Name === 'Perfil Mediador') ? ((parceiro.Total / 165) * 100).toFixed(2) : null
            || (terceiro.Name === 'Perfil Mediador') ? ((terceiro.Total / 165) * 100).toFixed(2) : null
        : null,
      (primeiro.Name === 'Perfil Comandante' || parceiro.Name === 'Perfil Comandante' || terceiro.Name === 'Perfil Comandante')
        ? (primeiro.Name === 'Perfil Comandante') ? ((primeiro.Total / 165) * 100).toFixed(2) : null
          || (parceiro.Name === 'Perfil Comandante') ? ((parceiro.Total / 165) * 100).toFixed(2) : null
            || (terceiro.Name === 'Perfil Comandante') ? ((terceiro.Total / 165) * 100).toFixed(2) : null
        : null,
      (primeiro.Name === 'Perfil Visionário' || parceiro.Name === 'Perfil Visionário' || terceiro.Name === 'Perfil Visionário')
        ? (primeiro.Name === 'Perfil Visionário') ? ((primeiro.Total / 165) * 100).toFixed(2) : null
          || (parceiro.Name === 'Perfil Visionário') ? ((parceiro.Total / 165) * 100).toFixed(2) : null
            || (terceiro.Name === 'Perfil Visionário') ? ((terceiro.Total / 165) * 100).toFixed(2) : null
        : null,
      (primeiro.Name === 'Perfil Planejador' || parceiro.Name === 'Perfil Planejador' || terceiro.Name === 'Perfil Planejador')
        ? (primeiro.Name === 'Perfil Planejador') ? ((primeiro.Total / 165) * 100).toFixed(2) : null
          || (parceiro.Name === 'Perfil Planejador') ? ((parceiro.Total / 165) * 100).toFixed(2) : null
            || (terceiro.Name === 'Perfil Planejador') ? ((terceiro.Total / 165) * 100).toFixed(2) : null
        : null,
      (primeiro.Name === 'Perfil Analítico' || parceiro.Name === 'Perfil Analítico' || terceiro.Name === 'Perfil Analítico')
        ? (primeiro.Name === 'Perfil Analítico') ? ((primeiro.Total / 165) * 100).toFixed(2) : null
          || (parceiro.Name === 'Perfil Analítico') ? ((parceiro.Total / 165) * 100).toFixed(2) : null
            || (terceiro.Name === 'Perfil Analítico') ? ((terceiro.Total / 165) * 100).toFixed(2) : null
        : null,
    ];
  }

  const data = {
    labels: [
      `${criativo.Name.replace('Perfil ', '')} ${((criativo.Total / 165) * 100).toFixed(2)}%`,
      `${realizador.Name.replace('Perfil ', '')} ${((realizador.Total / 165) * 100).toFixed(2)}%`,
      `${prestativo.Name.replace('Perfil ', '')} ${((prestativo.Total / 165) * 100).toFixed(2)}%`,
      `${organizador.Name.replace('Perfil ', '')} ${((organizador.Total / 165) * 100).toFixed(2)}%`,
      `${mediador.Name.replace('Perfil ', '')} ${((mediador.Total / 165) * 100).toFixed(2)}%`,
      `${comandante.Name.replace('Perfil ', '')} ${((comandante.Total / 165) * 100).toFixed(2)}%`,
      `${visionario.Name.replace('Perfil ', '')} ${((visionario.Total / 165) * 100).toFixed(2)}%`,
      `${planejador.Name.replace('Perfil ', '')} ${((planejador.Total / 165) * 100).toFixed(2)}%`,
      `${analitico.Name.replace('Perfil ', '')} ${((analitico.Total / 165) * 100).toFixed(2)}%`,
    ],
    datasets: [
      {
        label: 'Tríade original',
        backgroundColor: 'rgba(31,15,250,0.2)',
        borderColor: 'rgba(31,15,250,0.7)',
        pointColor: 'rgba(31,15,250,1)',
        spanGaps: true,
        data: dataOriginal,
      },
      {
        label: 'Tríade adaptada',
        backgroundColor: 'rgba(250,15,31,0.2)',
        borderColor: 'rgba(250,15,31,0.7)',
        pointColor: 'rgba(250,15,31,1)',
        spanGaps: true,
        data: dataAdaptada,
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
