import React, { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IStaticIntroduction } from '../../../../TypeScript/Interfaces/IStaticContent';
import { filterStaticText } from './filterStatic';
import { useStateValue } from '../../Initial/Context/StateProvider';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import ReportText from './ReportText';

export interface IDynamic35 {
  profiles: IProfiles[];
  options: IStaticIntroduction[];
}

const Dynamic35 = (props: IDynamic35): JSX.Element => {
  const { profiles, options } = props;

  const [{ Language }] = useStateValue();

  const [resultado, setResultado] = useState<number>(1);

  const dynamicText35 = (contentId: number): string => filterStaticText(contentId, Language, options || []);

  useEffect((): void => {
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

    const dominante = perfs[0];
    const dominantePercent = ((dominante.Total / 165) * 100);
    const apoio = perfs[1];
    const apoioPercent = ((apoio.Total / 165) * 100);

    const apoioMax = (apoioPercent * 1.08);

    if (dominantePercent > apoioMax) {
      setResultado(2);
    }
  }, []);

  return (<ReportText text={dynamicText35(resultado)} />);
};

Dynamic35.displayName = 'Dynamic35';

export default Dynamic35;
