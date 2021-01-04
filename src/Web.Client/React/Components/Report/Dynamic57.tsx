import React from 'react';
// eslint-disable-next-line no-unused-vars
import { IStaticIntroduction } from '../../../../TypeScript/Interfaces/IStaticContent';
import { filterStaticText } from './filterStatic';
import { useStateValue } from '../../../../Web.Admin/React/Initial/Context/StateProvider';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import ReportText from './ReportText';

type profiles = 'Perfil Organizador' | 'Perfil Prestativo' | 'Perfil Realizador'
  | 'Perfil Criativo' | 'Perfil Analítico' | 'Perfil Planejador' | 'Perfil Visionário'
  | 'Perfil Comandante' | 'Perfil Mediador';

export interface IDynamic57 {
  profiles: IProfiles[];
  profile1: profiles;
  profile2: profiles;
  profile3: profiles;
  options: IStaticIntroduction[];
}

const Dynamic57 = (props: IDynamic57): JSX.Element => {
  const {
    profiles, profile1, profile2, profile3, options,
  } = props;

  const [{ Language }] = useStateValue();

  const amarelo = profiles.filter((item): boolean => item.Name === profile1)[0];
  const vermelho = profiles.filter((item): boolean => item.Name === profile2)[0];
  const azul = profiles.filter((item): boolean => item.Name === profile3)[0];

  const percentAmarelo = ((amarelo.Total / 165) * 100);
  const percentVermelho = ((vermelho.Total / 165) * 100);
  const percentAzul = ((azul.Total / 165) * 100);

  const dynamicText57 = (contentId: number): string => filterStaticText(contentId, Language, options || []);

  if (percentAmarelo < 16 || percentVermelho < 16 || percentAzul < 16) {
    return (
      <ReportText text={dynamicText57(1)} />
    );
  }

  return (
    <ReportText text={dynamicText57(2)} />
  );
};

Dynamic57.displayName = 'Dynamic57';

export default Dynamic57;
