import React from 'react';
// eslint-disable-next-line no-unused-vars
import { IReport } from '../../../../TypeScript/Interfaces/IReport';
import { useStateValue } from '../../Initial/Context/StateProvider';
import FilterImage from './FilterImage';
import ReportTitle from './ReportTitle';
import ReportText from './ReportText';
import { filterStaticTitle, filterStaticText } from './filterStatic';
// eslint-disable-next-line no-unused-vars
import { IImage } from '../../../../TypeScript/Interfaces/IImage';

export interface ReportContentProps {
  data: IReport;
}

const ReportContent = (props: ReportContentProps): JSX.Element => {
  const { data } = props;
  const [{ Language }] = useStateValue();

  const staticTitle = (contentId: number): string => filterStaticTitle(contentId, Language, data.StaticContent || []);
  const staticText = (contentId: number): string => filterStaticText(contentId, Language, data.StaticContent || []);
  const staticImages: IImage[] = data.Images || [];

  const FilteredImage = (imageId: number): JSX.Element => <FilterImage id={imageId} images={staticImages} />;

  return (
    <>
      <ReportTitle title={staticTitle(1)} />
      <ReportText text={staticText(1)} />
      {FilteredImage(1)}
      <ReportTitle title={staticTitle(2)} />
      {FilteredImage(2)}
      <ReportText text={staticText(3)} />
      {FilteredImage(3)}
      <ReportTitle title={staticTitle(4)} />
      <ReportText text={staticText(4)} />
      <ReportTitle title={staticTitle(5)} />
      <ReportTitle title={staticTitle(6)} />
      <ReportText text={staticText(6)} />
      <ReportTitle title={staticTitle(7)} />
      <ReportText text={staticText(7)} />

      <ReportTitle title="título dinâmico 8" />

      <ReportTitle title={staticTitle(10)} />
      <ReportText text="texto dinâmico 10" />

      <ReportTitle title={staticTitle(11)} />
      <ReportText text="texto dinâmico 11" />

      <ReportTitle title={staticTitle(12)} />
      <ReportText text="texto dinâmico 12" />

      <ReportTitle title={staticTitle(13)} />
      <ReportText text="texto dinâmico 13" />

      <ReportTitle title={staticTitle(14)} />
      <ReportText text="texto dinâmico 14" />

      <ReportTitle title={staticTitle(15)} />
      <ReportText text="texto dinâmico 15" />

      <ReportTitle title={staticTitle(16)} />
      <ReportText text="texto dinâmico 16" />

      <ReportTitle title={staticTitle(17)} />
      <ReportText text="texto dinâmico 17" />

      <ReportTitle title={staticTitle(18)} />
      <ReportText text="texto dinâmico 18" />

      <ReportTitle title={staticTitle(19)} />
      <ReportText text="texto dinâmico 19" />

      <ReportTitle title={staticTitle(20)} />
      <ReportText text="texto dinâmico 20" />

      <ReportTitle title={staticTitle(21)} />
      <ReportText text="texto dinâmico 21" />

      <ReportTitle title={staticTitle(22)} />
      <ReportText text="texto dinâmico 22" />

      <ReportTitle title={staticTitle(23)} />
      <ReportText text="texto dinâmico 23" />

      <ReportTitle title={staticTitle(24)} />
      <ReportText text="texto dinâmico 24" />

      <ReportTitle title={staticTitle(25)} />
      <ReportText text="texto dinâmico 25" />

      <ReportTitle title={staticTitle(26)} />
      <ReportText text="texto dinâmico 26" />

      <ReportTitle title={staticTitle(27)} />
      <ReportText text="texto dinâmico 27" />

      <ReportTitle title={staticTitle(28)} />
      <ReportText text="texto dinâmico 28" />

      <ReportTitle title={staticTitle(29)} />
      <ReportText text="texto dinâmico 29" />

      <ReportTitle title={staticTitle(30)} />
      <ReportText text="texto dinâmico 30" />

      <ReportTitle title={staticTitle(31)} />
      <ReportText text="texto dinâmico 31" />

      <ReportTitle title={staticTitle(32)} />
      <ReportText text="texto dinâmico 32" />

      <ReportTitle title={staticTitle(33)} />
      <ReportText text="texto dinâmico 33" />

      <ReportTitle title={staticTitle(38)} />

      <ReportTitle title={staticTitle(39)} />
      <ReportText text={staticText(39)} />

      <ReportTitle title={staticTitle(40)} />
      <ReportText text={staticText(40)} />

      <ReportTitle title="título dinâmico 41" />

      <ReportTitle title={staticTitle(34)} />
      <ReportText text="texto dinâmico 34" />

      <ReportTitle title={staticTitle(42)} />
      <ReportText text="texto dinâmico 42" />

      <ReportTitle title={staticTitle(43)} />
      <ReportText text={staticText(43)} />

      <ReportTitle title="título dinâmico 44" />

      <ReportTitle title={staticTitle(35)} />
      <ReportText text="texto dinâmico 35" />

      <ReportTitle title={staticTitle(45)} />
      <ReportText text="texto dinâmico 45" />

      <ReportTitle title={staticTitle(46)} />

      <ReportTitle title={staticTitle(47)} />
      <ReportText text={staticText(47)} />

      <ReportTitle title={staticTitle(48)} />
      <ReportText text={staticText(48)} />

      <ReportTitle title="título dinâmico 49" />

      <ReportTitle title={staticTitle(36)} />
      <ReportText text="texto dinâmico 36" />

      <ReportTitle title={staticTitle(50)} />
      <ReportText text="texto dinâmico 50" />

      <ReportTitle title={staticTitle(51)} />
      <ReportText text={staticText(51)} />

      <ReportTitle title="título dinâmico 52" />

      <ReportTitle title={staticTitle(37)} />
      <ReportText text="texto dinâmico 37" />

      <ReportTitle title={staticTitle(54)} />

      <ReportTitle title={staticTitle(55)} />
      <ReportText text="gráfico 1" />

      <ReportText text={staticText(56)} />

      <ReportTitle title={staticTitle(57)} />
      <ReportText text="gráfico 2" />

      <ReportTitle title={staticTitle(58)} />
      <ReportText text={staticText(58)} />

      <ReportTitle title={staticTitle(59)} />
      <ReportText text="texto dinâmico 59" />

      <ReportTitle title={staticTitle(60)} />
      <ReportText text={staticText(60)} />
      <ReportText text="gráfico 3" />

      <ReportText text="texto dinâmico 62" />

      <ReportTitle title="título dinâmico 64" />
      <ReportText text="texto dinâmico 64" />

      <ReportTitle title={staticTitle(65)} />
      <ReportText text="gráfico 4" />

      <ReportTitle title={staticTitle(61)} />
      <ReportText text={staticText(61)} />

      <ReportTitle title="título dinâmico 9" />
      <ReportText text="texto dinâmico 9" />

      <ReportTitle title={staticTitle(67)} />
      <ReportText text={staticText(67)} />

      <ReportTitle title={staticTitle(73)} />
      <ReportText text={staticText(73)} />

      <ReportText text="texto dinâmico 63" />

      <ReportTitle title={staticTitle(69)} />
      <ReportText text="texto dinâmico 69" />

      <ReportTitle title={staticTitle(70)} />
      <ReportText text="texto dinâmico 70" />

      <ReportTitle title={staticTitle(71)} />
      <ReportText text="texto dinâmico 71" />

      <ReportTitle title={staticTitle(72)} />
      <ReportText text="texto dinâmico 72" />

      <ReportTitle title={staticTitle(74)} />

      <ReportTitle title={staticTitle(82)} />
      <ReportText text="texto dinâmico 82" />

      <ReportTitle title={staticTitle(83)} />
      <ReportText text="texto dinâmico 83" />

      <ReportTitle title={staticTitle(92)} />
      <ReportText text="texto dinâmico 92" />

      <ReportTitle title={staticTitle(84)} />
      <ReportText text="texto dinâmico 84" />

      {/* parte avançada */}

      <ReportTitle title={staticTitle(68)} />

      <ReportTitle title={staticTitle(75)} />
      <ReportText text={staticText(75)} />
      {FilteredImage(4)}

      <ReportText text={staticText(76)} />
      {FilteredImage(5)}

      <ReportTitle title={staticTitle(77)} />

      <ReportTitle title={staticTitle(78)} />
      <ReportText text={staticText(78)} />

      <ReportTitle title={staticTitle(79)} />
      <ReportText text="texto dinâmico 79" />

      <ReportTitle title={staticTitle(80)} />
      <ReportText text="texto dinâmico 80" />

      <ReportTitle title={staticTitle(81)} />
      <ReportText text="texto dinâmico 81" />

      <ReportTitle title={staticTitle(85)} />
      <ReportText text={staticText(85)} />

      <ReportTitle title={staticTitle(86)} />
      <ReportText text="texto dinâmico 86" />

      <ReportTitle title={staticTitle(87)} />
      <ReportText text="texto dinâmico 87" />

      <ReportTitle title={staticTitle(88)} />
      <ReportText text={staticText(88)} />

      <ReportTitle title={staticTitle(89)} />
      <ReportText text="texto dinâmico 89" />

      <ReportTitle title={staticTitle(90)} />
      <ReportText text={staticText(90)} />

      <ReportTitle title={staticTitle(91)} />
      <ReportText text="texto dinâmico 91" />

      <ReportTitle title={staticTitle(93)} />
      <ReportText text="texto dinâmico 93" />

      <ReportTitle title={staticTitle(94)} />
      <ReportText text="texto dinâmico 94" />

      <ReportTitle title={staticTitle(95)} />
      <ReportText text="texto dinâmico 95" />

      {/* análise profissional */}

      <ReportTitle title={staticTitle(96)} />
      {FilteredImage(6)}

      <ReportTitle title={staticTitle(97)} />
      <ReportText text={staticText(97)} />

      <ReportTitle title={staticTitle(101)} />
      <ReportText text={staticText(101)} />

      <ReportTitle title={staticTitle(102)} />
      <ReportText text={staticText(102)} />
      <ReportText text="gráfico 5" />

      <ReportText text="texto dinâmico 103" />

      <ReportTitle title={staticTitle(104)} />
      <ReportText text={staticText(104)} />

      <ReportTitle title={staticTitle(105)} />
      <ReportText text={staticText(105)} />
      <ReportText text="gráfico 6" />

      <ReportText text="texto dinâmico 106" />

      <ReportTitle title={staticTitle(107)} />
      <ReportText text={staticText(107)} />

      <ReportTitle title={staticTitle(108)} />
      <ReportText text={staticText(108)} />
      <ReportText text="gráfico 7" />

      <ReportText text="texto dinâmico 109" />

      <ReportTitle title={staticTitle(110)} />
      <ReportText text={staticText(110)} />

      <ReportTitle title={staticTitle(111)} />
      <ReportText text={staticText(111)} />
      <ReportText text="gráfico 8" />

      <ReportText text="texto dinâmico 112" />

      <ReportTitle title={staticTitle(113)} />
      <ReportText text={staticText(113)} />

      <ReportTitle title={staticTitle(114)} />
      <ReportText text={staticText(114)} />
      <ReportText text="gráfico 9" />

      <ReportText text="texto dinâmico 115" />

      <ReportTitle title={staticTitle(116)} />
      <ReportText text={staticText(116)} />

      <ReportTitle title={staticTitle(117)} />
      <ReportText text={staticText(117)} />
      <ReportText text="gráfico 10" />

      <ReportText text="texto dinâmico 118" />

      <ReportTitle title={staticTitle(119)} />
      <ReportText text={staticText(119)} />

      <ReportTitle title={staticTitle(120)} />
      <ReportText text={staticText(120)} />
      <ReportText text="gráfico 11" />

      <ReportText text="texto dinâmico 121" />

      <ReportTitle title={staticTitle(122)} />
      <ReportText text={staticText(122)} />

      <ReportTitle title={staticTitle(123)} />
      <ReportText text={staticText(123)} />
      <ReportText text="gráfico 12" />

      <ReportText text="texto dinâmico 124" />

      <ReportTitle title={staticTitle(125)} />
      <ReportText text={staticText(125)} />

      <ReportTitle title={staticTitle(126)} />
      <ReportText text={staticText(126)} />
      <ReportText text="gráfico 13" />

      <ReportText text="texto dinâmico 127" />

      <ReportTitle title={staticTitle(128)} />
      <ReportText text={staticText(128)} />

      <ReportTitle title={staticTitle(129)} />
      <ReportText text={staticText(129)} />
      <ReportText text="gráfico 14" />

      <ReportText text="texto dinâmico 130" />

      <ReportTitle title={staticTitle(131)} />
      <ReportText text={staticText(131)} />

      <ReportTitle title={staticTitle(132)} />
      <ReportText text={staticText(132)} />
      <ReportText text="gráfico 15" />

      <ReportText text="texto dinâmico 133" />

      <ReportTitle title={staticTitle(134)} />
      <ReportText text={staticText(134)} />

      <ReportTitle title={staticTitle(135)} />
      <ReportText text={staticText(135)} />
      <ReportText text="gráfico 16" />

      <ReportText text="texto dinâmico 136" />

      <ReportTitle title={staticTitle(137)} />
      <ReportText text={staticText(137)} />

      <ReportTitle title={staticTitle(138)} />
      <ReportText text={staticText(138)} />
      <ReportText text="gráfico 17" />

      <ReportTitle title={staticTitle(139)} />
      <ReportText text={staticText(139)} />

      <ReportTitle title={staticTitle(140)} />
      <ReportText text={staticText(140)} />

      <ReportTitle title={staticTitle(141)} />
      <ReportText text={staticText(141)} />

      <ReportTitle title={staticTitle(142)} />
      <ReportText text={staticText(142)} />

      <ReportTitle title={staticTitle(143)} />
      <ReportText text={staticText(143)} />

      <ReportTitle title={staticTitle(144)} />

      <ReportTitle title={staticTitle(145)} />
      <ReportText text="texto dinâmico 145" />

      <ReportTitle title={staticTitle(147)} />
      <ReportText text="texto dinâmico 147" />

      <ReportTitle title={staticTitle(148)} />
      <ReportText text="texto dinâmico 148" />

      <ReportTitle title={staticTitle(149)} />
      <ReportText text="texto dinâmico 149" />

      <ReportTitle title={staticTitle(146)} />
      <ReportText text="texto dinâmico 146" />
    </>
  );
};

ReportContent.displayName = 'ReportContent';

export default ReportContent;
