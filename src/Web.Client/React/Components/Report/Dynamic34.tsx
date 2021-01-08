import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { IStaticIntroduction } from '../../../../TypeScript/Interfaces/IStaticContent';
import { filterStaticText } from './filterStatic';
import { useStateValue } from '../../Initial/Context/StateProvider';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import ReportText from './ReportText';

export interface IDynamic34 {
  profiles: IProfiles[];
  options: IStaticIntroduction[];
}

const Dynamic34 = (props: IDynamic34): JSX.Element => {
  const { profiles, options } = props;

  const [{ Language }] = useStateValue();

  const [conflitos, setConflitos] = useState<string[]>([]);

  const abaixoDe16 = profiles.filter((item): boolean => ((item.Total / 165) * 100) < 16);

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

  useEffect((): void => {
    const conflicts: string[] = [];

    if (Math.abs(analitico - organizador) <= 8) {
      conflicts.push(dynamicText34(1));
    }

    if (Math.abs(analitico - criativo) <= 8) {
      conflicts.push(dynamicText34(2));
    }

    if (Math.abs(realizador - planejador) <= 8) {
      conflicts.push(dynamicText34(3));
    }

    if (Math.abs(visionario - prestativo) <= 8) {
      conflicts.push(dynamicText34(4));
    }

    if (Math.abs(visionario - analitico) <= 8) {
      conflicts.push(dynamicText34(5));
    }

    if (Math.abs(prestativo - criativo) <= 8) {
      conflicts.push(dynamicText34(6));
    }

    if (Math.abs(comandante - mediador) <= 8) {
      conflicts.push(dynamicText34(8));
    }

    if (Math.abs(visionario - comandante) <= 8) {
      conflicts.push(dynamicText34(9));
    }

    if (Math.abs(organizador - mediador) <= 8) {
      conflicts.push(dynamicText34(10));
    }

    if (Math.abs(comandante - organizador) <= 8) {
      conflicts.push(dynamicText34(11));
    }

    if (Math.abs(comandante - criativo) <= 8) {
      conflicts.push(dynamicText34(12));
    }

    if (Math.abs(planejador - visionario) <= 8) {
      conflicts.push(dynamicText34(13));
    }

    if (Math.abs(planejador - analitico) <= 8) {
      conflicts.push(dynamicText34(14));
    }

    if (Math.abs(realizador - criativo) <= 8) {
      conflicts.push(dynamicText34(15));
    }

    if (Math.abs(realizador - prestativo) <= 8) {
      conflicts.push(dynamicText34(16));
    }

    if (Math.abs(prestativo - organizador) <= 8) {
      conflicts.push(dynamicText34(17));
    }

    setConflitos(conflicts);
  }, []);

  if (abaixoDe16.length > 0 || conflitos.length === 0) {
    return (
      <ReportText text={dynamicText34(7)} />
    );
  }

  return (
    <List>
      {
        conflitos.map((item, index): React.ReactNode => (
          // eslint-disable-next-line react/no-array-index-key
          <ListItem key={index}>
            <ListItemText color="red">
              <strong>
                {/* eslint-disable-next-line react/no-danger */ }
                <div dangerouslySetInnerHTML={{ __html: item }} />
              </strong>
            </ListItemText>
          </ListItem>
        ))
      }
    </List>
  );
};

Dynamic34.DisplayName = 'Dynamic34';

export default Dynamic34;
