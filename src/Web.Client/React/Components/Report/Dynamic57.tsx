import React from 'react';
// eslint-disable-next-line no-unused-vars
import { IStaticIntroduction } from '../../../../TypeScript/Interfaces/IStaticContent';
import { filterStaticText } from './filterStatic';
import { useStateValue } from '../../Initial/Context/StateProvider';
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

  const amarelos = profiles.filter((item): boolean => item.Color === 'Amarelo');
  amarelos.sort((a, b): number => b.Total - a.Total || b.InternalNumber - a.InternalNumber);
  const maiorAmarelo = amarelos[0];

  const vermelhos = profiles.filter((item): boolean => item.Color === 'Vermelho');
  vermelhos.sort((a, b): number => b.Total - a.Total || b.InternalNumber - a.InternalNumber);
  const maiorVermelho = vermelhos[0];

  const azuis = profiles.filter((item): boolean => item.Color === 'Azul');
  azuis.sort((a, b): number => b.Total - a.Total || b.InternalNumber - a.InternalNumber);
  const maiorAzul = azuis[0];

  const amarelo = profiles.filter((item): boolean => item.Name === profile1)[0];
  const vermelho = profiles.filter((item): boolean => item.Name === profile2)[0];
  const azul = profiles.filter((item): boolean => item.Name === profile3)[0];

  const percentAmarelo = ((amarelo.Total / 165) * 100);
  const percentVermelho = ((vermelho.Total / 165) * 100);
  const percentAzul = ((azul.Total / 165) * 100);

  const atencao: string[] = [];

  if (percentAmarelo < 16) {
    atencao.push(amarelo.Name);
  }

  if (percentVermelho < 16) {
    atencao.push(vermelho.Name);
  }

  if (percentAzul < 16) {
    atencao.push(azul.Name);
  }

  const dynamicText57 = (contentId: number): string => filterStaticText(contentId, Language, options || []);

  if (atencao.length > 0) {
    return (
      <>
        <ReportText text={dynamicText57(1)} />
        {/* <List>
          {
            atencao.map((point): React.ReactNode => (
              <ListItem key={point}>
                <ListItemText color="red"><strong>{point}</strong></ListItemText>
              </ListItem>
            ))
          }
        </List> */}
      </>
    );
  }

  if (atencao.length === 0 && maiorAmarelo === amarelo && maiorVermelho === vermelho && maiorAzul === azul) {
    return (
      <ReportText text={dynamicText57(3)} />
    );
  }

  return (
    <ReportText text={dynamicText57(2)} />
  );
};

Dynamic57.displayName = 'Dynamic57';

export default Dynamic57;
