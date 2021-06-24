import React, { useEffect, useState } from 'react';
import { List, Typography } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { IStaticIntroduction } from '../../../../TypeScript/Interfaces/IStaticContent';
import { filterStaticText } from './filterStatic';
import { useStateValue } from '../../Initial/Context/StateProvider';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface IDynamic34 {
  profiles: IProfiles[];
  options: IStaticIntroduction[];
}

const Dynamic34 = (props: IDynamic34): JSX.Element => {
  const { profiles, options } = props;
  const classes = useStyles();

  const [{ Language }] = useStateValue();

  const [conflitos, setConflitos] = useState<string[]>([]);
  const [ready, setReady] = useState<boolean>(false);

  const dynamicText34 = (contentId: number): string => filterStaticText(contentId, Language, options || []);

  let comandante = profiles.filter((item): boolean => item.Name === 'Perfil Comandante')[0].Total || 0;
  comandante = ((comandante / 165) * 100);
  let mediador = profiles.filter((item): boolean => item.Name === 'Perfil Mediador')[0].Total || 0;
  mediador = ((mediador / 165) * 100);
  let organizador = profiles.filter((item): boolean => item.Name === 'Perfil Organizador')[0].Total || 0;
  organizador = ((organizador / 165) * 100);
  let prestativo = profiles.filter((item): boolean => item.Name === 'Perfil Prestativo')[0].Total || 0;
  prestativo = ((prestativo / 165) * 100);
  let realizador = profiles.filter((item): boolean => item.Name === 'Perfil Realizador')[0].Total || 0;
  realizador = ((realizador / 165) * 100);
  let criativo = profiles.filter((item): boolean => item.Name === 'Perfil Criativo')[0].Total || 0;
  criativo = ((criativo / 165) * 100);
  let analitico = profiles.filter((item): boolean => item.Name === 'Perfil Analítico')[0].Total || 0;
  analitico = ((analitico / 165) * 100);
  let planejador = profiles.filter((item): boolean => item.Name === 'Perfil Planejador')[0].Total || 0;
  planejador = ((planejador / 165) * 100);
  let visionario = profiles.filter((item): boolean => item.Name === 'Perfil Visionário')[0].Total || 0;
  visionario = ((visionario / 165) * 100);

  const AddOrDont = (total1: number, total2: number, conflictId: number): void => {
    if (total1 < 16 || total2 < 16) return;

    const min = Math.min(total1, total2);
    const max = Math.max(total1, total2);

    const percent = (min * 1.08);

    const conflicts: string[] = conflitos;

    if (max <= percent) {
      conflicts.push(dynamicText34(conflictId));
    }

    setConflitos(conflicts);
  };

  const groupAll = (): void => {
    AddOrDont(analitico, organizador, 1);
    AddOrDont(analitico, criativo, 2);
    AddOrDont(realizador, planejador, 3);
    AddOrDont(visionario, prestativo, 4);
    AddOrDont(visionario, analitico, 5);
    AddOrDont(prestativo, criativo, 6);
    AddOrDont(comandante, mediador, 8);
    AddOrDont(visionario, comandante, 9);
    AddOrDont(organizador, mediador, 10);
    AddOrDont(comandante, organizador, 11);
    AddOrDont(comandante, criativo, 12);
    AddOrDont(planejador, visionario, 13);
    AddOrDont(planejador, analitico, 14);
    AddOrDont(realizador, criativo, 15);
    AddOrDont(realizador, prestativo, 16);
    AddOrDont(prestativo, organizador, 17);

    if (conflitos.length === 0) {
      setConflitos([dynamicText34(7)]);
    }
  };

  useEffect((): void => {
    groupAll();
    setReady(true);
  }, []);

  return (!ready) ? (
    <>
      -
    </>
  ) : (
    <List>
      {
        conflitos.map((item, index): React.ReactNode => (
          <Typography
          // eslint-disable-next-line react/no-array-index-key
            key={index}
            variant="body1"
            component="div"
            align="justify"
            dangerouslySetInnerHTML={{ __html: item }}
            className={classes.item}
          />
        ))
      }
    </List>
  );
};

Dynamic34.DisplayName = 'Dynamic34';

export default Dynamic34;
