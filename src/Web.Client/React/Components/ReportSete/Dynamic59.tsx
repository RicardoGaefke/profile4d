import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { IStaticIntroduction } from '../../../../TypeScript/Interfaces/IStaticContent';
import { filterStaticText } from './filterStatic';
import { useStateValue } from '../../Initial/Context/StateProvider';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import ReportText from './ReportText';

export interface IDynamic59 {
  profiles: IProfiles[];
  options: IStaticIntroduction[];
}

const Dynamic59 = (props: IDynamic59): JSX.Element => {
  const { profiles, options } = props;

  const [{ Language }] = useStateValue();

  const [resultado, setResultado] = useState<number>(0);
  const [ready, setReady] = useState<boolean>(false);

  const dynamicText59 = (contentId: number): string => filterStaticText(contentId, Language, options || []);

  const create59 = (): void => {
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

    // eslint-disable-next-line max-len
    perfs.sort((a, b): number => b.Total - a.Total || (a.ExternalNumber || 1) - (b.ExternalNumber || 1) || (b.InternalNumber || 1) - (a.InternalNumber || 1));

    const primeiro = perfs[0];
    const segundo = perfs[1];

    if (primeiro.Name === 'Perfil Organizador') {
      if (segundo.Name === 'Perfil Visionário') {
        setResultado(1);
        setReady(true);
        return;
      }

      if (segundo.Name === 'Perfil Analítico' || segundo.Name === 'Perfil Planejador') {
        setResultado(2);
        setReady(true);
        return;
      }

      if (segundo.Name === 'Perfil Prestativo' || segundo.Name === 'Perfil Realizador' || segundo.Name === 'Perfil Criativo') {
        setResultado(3);
        setReady(true);
        return;
      }
    }

    if (primeiro.Name === 'Perfil Mediador') {
      if (segundo.Name === 'Perfil Realizador') {
        setResultado(1);
        setReady(true);
        return;
      }

      if (segundo.Name === 'Perfil Prestativo' || segundo.Name === 'Perfil Criativo') {
        setResultado(2);
        setReady(true);
        return;
      }

      if (segundo.Name === 'Perfil Analítico' || segundo.Name === 'Perfil Planejador' || segundo.Name === 'Perfil Visionário') {
        setResultado(3);
        setReady(true);
        return;
      }
    }

    if (primeiro.Name === 'Perfil Comandante') {
      if (segundo.Name === 'Perfil Prestativo') {
        setResultado(1);
        setReady(true);
        return;
      }

      if (segundo.Name === 'Perfil Realizador' || segundo.Name === 'Perfil Criativo') {
        setResultado(2);
        setReady(true);
        return;
      }

      if (segundo.Name === 'Perfil Analítico' || segundo.Name === 'Perfil Planejador' || segundo.Name === 'Perfil Visionário') {
        setResultado(3);
        setReady(true);
        return;
      }
    }

    if (primeiro.Name === 'Perfil Prestativo') {
      if (segundo.Name === 'Perfil Analítico' || segundo.Name === 'Perfil Planejador') {
        setResultado(1);
        setReady(true);
        return;
      }

      if (segundo.Name === 'Perfil Visionário') {
        setResultado(2);
        setReady(true);
        return;
      }

      if (segundo.Name === 'Perfil Comandante' || segundo.Name === 'Perfil Mediador' || segundo.Name === 'Perfil Organizador') {
        setResultado(3);
        setReady(true);
        return;
      }
    }

    if (primeiro.Name === 'Perfil Realizador') {
      if (segundo.Name === 'Perfil Planejador') {
        setResultado(1);
        setReady(true);
        return;
      }

      if (segundo.Name === 'Perfil Analítico' || segundo.Name === 'Perfil Visionário') {
        setResultado(2);
        setReady(true);
        return;
      }

      if (segundo.Name === 'Perfil Comandante' || segundo.Name === 'Perfil Mediador' || segundo.Name === 'Perfil Organizador') {
        setResultado(3);
        setReady(true);
        return;
      }
    }

    if (primeiro.Name === 'Perfil Criativo') {
      if (segundo.Name === 'Perfil Organizador') {
        setResultado(1);
        setReady(true);
        return;
      }

      if (segundo.Name === 'Perfil Comandante' || segundo.Name === 'Perfil Mediador') {
        setResultado(2);
        setReady(true);
        return;
      }

      if (segundo.Name === 'Perfil Analítico' || segundo.Name === 'Perfil Planejador' || segundo.Name === 'Perfil Visionário') {
        setResultado(3);
        setReady(true);
        return;
      }
    }

    if (primeiro.Name === 'Perfil Analítico') {
      if (segundo.Name === 'Perfil Comandante') {
        setResultado(1);
        setReady(true);
        return;
      }

      if (segundo.Name === 'Perfil Organizador' || segundo.Name === 'Perfil Mediador') {
        setResultado(2);
        setReady(true);
        return;
      }

      if (segundo.Name === 'Perfil Prestativo' || segundo.Name === 'Perfil Realizador' || segundo.Name === 'Perfil Criativo') {
        setResultado(3);
        setReady(true);
        return;
      }
    }

    if (primeiro.Name === 'Perfil Planejador') {
      if (segundo.Name === 'Perfil Mediador') {
        setResultado(1);
        setReady(true);
        return;
      }

      if (segundo.Name === 'Perfil Comandante' || segundo.Name === 'Perfil Organizador') {
        setResultado(2);
        setReady(true);
        return;
      }

      if (segundo.Name === 'Perfil Prestativo' || segundo.Name === 'Perfil Realizador' || segundo.Name === 'Perfil Criativo') {
        setResultado(3);
        setReady(true);
        return;
      }
    }

    if (primeiro.Name === 'Perfil Visionário') {
      if (segundo.Name === 'Perfil Criativo' || segundo.Name === 'Perfil Realizador') {
        setResultado(1);
        setReady(true);
        return;
      }

      if (segundo.Name === 'Perfil Prestativo') {
        setResultado(2);
        setReady(true);
        return;
      }

      if (segundo.Name === 'Perfil Comandante' || segundo.Name === 'Perfil Mediador' || segundo.Name === 'Perfil Organizador') {
        setResultado(3);
        setReady(true);
      }
    }
  };

  useEffect((): void => {
    create59();
  }, []);

  return (ready) ? (<ReportText text={dynamicText59(resultado)} border />) : (<></>);
};

Dynamic59.displayName = 'Dynamic59';

export default Dynamic59;
