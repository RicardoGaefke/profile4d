import React, { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IStaticIntroduction } from '../../../../TypeScript/Interfaces/IStaticContent';
import { filterStaticText } from './filterStatic';
import { useStateValue } from '../../Initial/Context/StateProvider';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import ReportText from './ReportText';

export interface IDynamic38 {
  profiles: IProfiles[];
  options: IStaticIntroduction[];
}

const Dynamic38 = (props: IDynamic38): JSX.Element => {
  const { profiles, options } = props;

  const [{ Language }] = useStateValue();

  const [resultado, setResultado] = useState<number>(0);
  const [ready, setReady] = useState<boolean>(false);

  const dynamicText38 = (contentId: number): string => filterStaticText(contentId, Language, options || []);

  const create38 = (): void => {
    const amarelos = profiles.filter((item): boolean => item.Color === 'Amarelo');
    amarelos.sort((a, b): number => b.Total - a.Total || b.InternalNumber - a.InternalNumber);
    const amarelo = amarelos[0];

    const vermelhos = profiles.filter((item): boolean => item.Color === 'Vermelho');
    vermelhos.sort((a, b): number => b.Total - a.Total || b.InternalNumber - a.InternalNumber);
    const vermelho = vermelhos[0];

    const azuis = profiles.filter((item): boolean => item.Color === 'Azul');
    azuis.sort((a, b): number => b.Total - a.Total || b.InternalNumber - a.InternalNumber);
    const azul = azuis[0];

    const perfs: IProfiles[] = [amarelo, vermelho, azul];

    perfs.sort((a, b): number => b.Total - a.Total || b.InternalNumber - a.InternalNumber);

    const primeiro = perfs[0];
    const segundo = perfs[1];
    const terceiro = perfs[2];

    const perfis: string[] = [primeiro.Name, segundo.Name, terceiro.Name];

    if (perfis.includes('Perfil Mediador') && perfis.includes('Perfil Analítico') && perfis.includes('Perfil Criativo')) {
      setResultado(1);
      setReady(true);
      return;
    }

    if (perfis.includes('Perfil Comandante') && perfis.includes('Perfil Realizador') && perfis.includes('Perfil Visionário')) {
      setResultado(2);
      setReady(true);
      return;
    }

    if (perfis.includes('Perfil Organizador') && perfis.includes('Perfil Prestativo') && perfis.includes('Perfil Planejador')) {
      setResultado(3);
      setReady(true);
      return;
    }

    if (perfis.includes('Perfil Mediador') && perfis.includes('Perfil Prestativo') && perfis.includes('Perfil Visionário')) {
      setResultado(4);
      setReady(true);
      return;
    }

    if (perfis.includes('Perfil Analítico') && perfis.includes('Perfil Realizador') && perfis.includes('Perfil Organizador')) {
      setResultado(5);
      setReady(true);
      return;
    }

    if (perfis.includes('Perfil Planejador') && perfis.includes('Perfil Criativo') && perfis.includes('Perfil Comandante')) {
      setResultado(6);
      setReady(true);
      return;
    }

    if (primeiro.Name === 'Perfil Realizador' && segundo.Name === 'Perfil Planejador' && terceiro.Name === 'Perfil Mediador') {
      setResultado(7);
      setReady(true);
      return;
    }

    if (primeiro.Name === 'Perfil Planejador' && segundo.Name === 'Perfil Mediador' && terceiro.Name === 'Perfil Realizador') {
      setResultado(7);
      setReady(true);
      return;
    }

    if (primeiro.Name === 'Perfil Mediador' && segundo.Name === 'Perfil Realizador' && terceiro.Name === 'Perfil Planejador') {
      setResultado(7);
      setReady(true);
      return;
    }

    if (primeiro.Name === 'Perfil Visionário' && segundo.Name === 'Perfil Criativo' && terceiro.Name === 'Perfil Organizador') {
      setResultado(8);
      setReady(true);
      return;
    }

    if (primeiro.Name === 'Perfil Criativo' && segundo.Name === 'Perfil Organizador' && terceiro.Name === 'Perfil Visionário') {
      setResultado(8);
      setReady(true);
      return;
    }

    if (primeiro.Name === 'Perfil Organizador' && segundo.Name === 'Perfil Visionário' && terceiro.Name === 'Perfil Criativo') {
      setResultado(8);
      setReady(true);
      return;
    }

    if (primeiro.Name === 'Perfil Prestativo' && segundo.Name === 'Perfil Analítico' && terceiro.Name === 'Perfil Comandante') {
      setResultado(9);
      setReady(true);
      return;
    }

    if (primeiro.Name === 'Perfil Comandante' && segundo.Name === 'Perfil Prestativo' && terceiro.Name === 'Perfil Analítico') {
      setResultado(9);
      setReady(true);
      return;
    }

    if (primeiro.Name === 'Perfil Analítico' && segundo.Name === 'Perfil Comandante' && terceiro.Name === 'Perfil Prestativo') {
      setResultado(9);
      setReady(true);
    }
  };

  useEffect((): void => {
    create38();
  }, []);

  return (ready) ? (<ReportText text={dynamicText38(resultado)} />) : (<></>);
};

Dynamic38.displayName = 'Dynamic38';

export default Dynamic38;
