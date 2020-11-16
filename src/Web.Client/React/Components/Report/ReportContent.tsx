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
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Chart5 from './Chart5';
import Chart6 from './Chart6';
import Chart7 from './Chart7';
import Chart8 from './Chart8';
import Chart9 from './Chart9';
import Chart10 from './Chart10';
import Chart11 from './Chart11';
import Chart12 from './Chart12';
import Chart13 from './Chart13';
import Chart14 from './Chart14';
import Chart15 from './Chart15';
import Chart16 from './Chart16';
import Chart17 from './Chart17';

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
      {FilteredImage(1)}
      <ReportTitle title={staticTitle(1)} />
      <ReportText text={staticText(1)} />

      <ReportTitle title={staticTitle(2)} />
      {FilteredImage(2)}

      <ReportText text={staticText(3)} />
      {FilteredImage(3)}

      <ReportText text={staticText(4)} />

      <ReportTitle title={staticTitle(5)} />

      <ReportText text={staticText(6)} />

      <ReportText text={staticText(7)} />

      <ReportTitle title="título dinâmico 2" />
      <ReportText text="texto dinâmico 2" />

      <ReportTitle title={staticTitle(10)} />
      <ReportText text="texto dinâmico 3" />

      <ReportTitle title={staticTitle(11)} />
      <ReportText text="texto dinâmico 4" />

      <ReportTitle title={staticTitle(12)} />
      <ReportText text="texto dinâmico 5" />

      <ReportTitle title={staticTitle(13)} />
      <ReportText text="texto dinâmico 6" />

      <ReportTitle title={staticTitle(14)} />
      <ReportText text="texto dinâmico 7" />

      <ReportTitle title={staticTitle(15)} />
      <ReportText text="texto dinâmico 8" />

      <ReportTitle title={staticTitle(16)} />
      <ReportText text="texto dinâmico 9" />

      <ReportTitle title={staticTitle(17)} />
      <ReportText text="texto dinâmico 10" />

      <ReportTitle title={staticTitle(18)} />
      <ReportText text="texto dinâmico 11" />

      <ReportTitle title={staticTitle(19)} />

      <ReportText text={staticText(20)} />

      <ReportText text={staticText(21)} />

      <ReportTitle title="título dinâmico 12" />
      <ReportText text="texto dinâmico 12" />

      <ReportTitle title={staticTitle(23)} />
      <ReportText text="texto dinâmico 13" />

      <ReportTitle title={staticTitle(24)} />
      <ReportText text="texto dinâmico 14" />

      <ReportTitle title={staticTitle(25)} />
      <ReportText text="texto dinâmico 15" />

      <ReportTitle title={staticTitle(26)} />
      <ReportText text="texto dinâmico 16" />

      <ReportTitle title={staticTitle(27)} />
      <ReportText text="texto dinâmico 17" />

      <ReportTitle title={staticTitle(28)} />
      <ReportText text="texto dinâmico 18" />

      <ReportTitle title={staticTitle(29)} />
      <ReportText text="texto dinâmico 19" />

      <ReportTitle title={staticTitle(30)} />
      <ReportText text="texto dinâmico 20" />

      <ReportTitle title={staticTitle(31)} />
      <ReportText text="texto dinâmico 21" />

      <ReportTitle title={staticTitle(32)} />
      <ReportText text="texto dinâmico 22" />

      <ReportTitle title={staticTitle(33)} />
      <ReportText text="texto dinâmico 23" />

      <ReportTitle title={staticTitle(38)} />

      <ReportText text={staticText(39)} />

      <ReportText text={staticText(40)} />

      <ReportTitle title="título dinâmico 2" />
      <ReportTitle title="texto dinâmico 2" />

      <ReportTitle title={staticTitle(35)} />
      <ReportText text="texto dinâmico 03" />

      <ReportTitle title={staticTitle(42)} />
      <ReportText text="texto dinâmico 04" />

      <ReportText text={staticText(43)} />

      <ReportTitle title="título dinâmico 2" />
      <ReportTitle title="texto dinâmico 2" />

      <ReportTitle title={staticTitle(35)} />
      <ReportText text="texto dinâmico 03" />

      <ReportTitle title={staticTitle(45)} />
      <ReportText text="texto dinâmico 04" />

      <ReportTitle title={staticTitle(46)} />

      <ReportText text={staticText(47)} />

      <ReportText text={staticText(48)} />

      <ReportTitle title="título dinâmico 12" />
      <ReportTitle title="texto dinâmico 12" />

      <ReportTitle title={staticTitle(36)} />
      <ReportText text="texto dinâmico 13" />

      <ReportTitle title={staticTitle(50)} />
      <ReportText text="texto dinâmico 17" />

      <ReportText text={staticText(51)} />

      <ReportTitle title="título dinâmico 12" />
      <ReportTitle title="texto dinâmico 12" />

      <ReportTitle title={staticTitle(37)} />
      <ReportText text="texto dinâmico 13" />

      <ReportTitle title={staticTitle(53)} />
      <ReportText text="texto dinâmico 17" />

      <ReportTitle title={staticTitle(54)} />

      <ReportTitle title={staticTitle(55)} />

      <Chart1
        profiles={data.Profiles || []}
      />

      <ReportText text={staticText(56)} />

      <ReportTitle title={staticTitle(57)} />
      <Chart2 profiles={data.Profiles || []} />

      <ReportText text={staticText(58)} />

      <ReportTitle title={staticTitle(59)} />
      <ReportText text="texto dinâmico 34" />

      <ReportTitle title={staticTitle(60)} />
      <ReportText text={staticText(60)} />

      <Chart3
        profiles={data.Profiles || []}
      />

      <ReportText text="texto dinâmico 35" />

      <ReportTitle title={staticTitle(64)} />
      <ReportText text="texto dinâmico 38" />

      <ReportTitle title={staticTitle(65)} />
      <ReportText text="gráfico 4" />

      <ReportText text={staticText(61)} />

      <ReportTitle title={staticTitle(69)} />
      <ReportText text="texto dinâmico 40" border />

      <ReportTitle title={staticTitle(70)} />
      <ReportText text="texto dinâmico 41" border />

      <ReportTitle title={staticTitle(71)} />
      <ReportText text="texto dinâmico 42" border />

      <ReportTitle title={staticTitle(72)} />
      <ReportText text="texto dinâmico 43" border />

      <ReportTitle title={staticTitle(9)} />
      <ReportText text="texto dinâmico 39" />

      <ReportText text={staticText(67)} />

      <ReportTitle title={staticTitle(73)} />
      <ReportText text="texto dinâmico 59" border />

      <ReportTitle title={staticTitle(74)} />

      <ReportTitle title={staticTitle(82)} />
      <ReportText text="texto dinâmico 47" />

      <ReportTitle title={staticTitle(83)} />
      <ReportText text="texto dinâmico 48" />

      <ReportText text={staticText(92)} />

      <ReportTitle title={staticTitle(84)} />
      <ReportText text="texto dinâmico 49" />

      {/* parte avançada */}

      <ReportTitle title={staticTitle(68)} />

      <ReportText text={staticText(75)} />
      {FilteredImage(4)}

      <ReportText text={staticText(76)} />
      {FilteredImage(5)}

      <ReportTitle title={staticTitle(77)} />

      <ReportText text={staticText(78)} />

      <ReportTitle title={staticTitle(79)} />
      <ReportText text="texto dinâmico 44" />

      <ReportTitle title={staticTitle(80)} />
      <ReportText text="texto dinâmico 45" />

      <ReportTitle title={staticTitle(81)} />
      <ReportText text="texto dinâmico 46" />

      <ReportTitle title={staticTitle(85)} />
      <ReportText text={staticText(85)} />

      <ReportTitle title={staticTitle(86)} />
      <ReportText text="texto dinâmico 50" />

      <ReportTitle title={staticTitle(87)} />
      <ReportText text="texto dinâmico 51" />

      <ReportText text={staticText(88)} />

      <ReportTitle title={staticTitle(89)} />
      <ReportText text="texto dinâmico 52" />

      <ReportTitle title={staticTitle(90)} />
      <ReportText text={staticText(90)} />

      <ReportTitle title={staticTitle(91)} />
      <ReportText text="texto dinâmico 53" />

      <ReportTitle title={staticTitle(93)} />
      <ReportText text="texto dinâmico 54" />

      <ReportTitle title={staticTitle(94)} />
      <ReportText text="texto dinâmico 55" />

      <ReportTitle title={staticTitle(95)} />
      <ReportText text="texto dinâmico 56" />

      {/* análise profissional */}

      <ReportTitle title={staticTitle(96)} />
      {FilteredImage(6)}

      <ReportText text={staticText(97)} />

      <ReportText text={staticText(101)} />

      <ReportText text={staticText(102)} />

      <Chart5 profiles={data.Profiles || []} />

      <ReportText text="texto dinâmico 57" />

      <ReportText text={staticText(104)} />

      <ReportText text={staticText(105)} />
      <Chart6 profiles={data.Profiles || []} />

      <ReportText text="texto dinâmico 57" />

      <ReportText text={staticText(107)} />

      <ReportText text={staticText(108)} />
      <Chart7 profiles={data.Profiles || []} />

      <ReportText text="texto dinâmico 57" />

      <ReportText text={staticText(110)} />

      <ReportText text={staticText(111)} />
      <Chart8 profiles={data.Profiles || []} />

      <ReportText text="texto dinâmico 57" />

      <ReportText text={staticText(113)} />

      <ReportText text={staticText(114)} />
      <Chart9 profiles={data.Profiles || []} />

      <ReportText text="texto dinâmico 57" />

      <ReportText text={staticText(116)} />

      <ReportText text={staticText(117)} />
      <Chart10 profiles={data.Profiles || []} />

      <ReportText text="texto dinâmico 57" />

      <ReportText text={staticText(119)} />

      <ReportText text={staticText(120)} />
      <Chart11 profiles={data.Profiles || []} />

      <ReportText text="texto dinâmico 57" />

      <ReportText text={staticText(122)} />

      <ReportText text={staticText(123)} />
      <Chart12 profiles={data.Profiles || []} />

      <ReportText text="texto dinâmico 57" />

      <ReportText text={staticText(125)} />

      <ReportText text={staticText(126)} />
      <Chart13 profiles={data.Profiles || []} />

      <ReportText text="texto dinâmico 57" />

      <ReportText text={staticText(128)} />

      <ReportText text={staticText(129)} />
      <Chart14 profiles={data.Profiles || []} />

      <ReportText text="texto dinâmico 57" />

      <ReportText text={staticText(131)} />

      <ReportText text={staticText(132)} />
      <Chart15 profiles={data.Profiles || []} />

      <ReportText text="texto dinâmico 57" />

      <ReportText text={staticText(134)} />

      <ReportText text={staticText(135)} />
      <Chart16 profiles={data.Profiles || []} />

      <ReportText text="texto dinâmico 57" />

      <ReportText text={staticText(137)} />

      <ReportTitle title={staticTitle(138)} />
      <ReportText text={staticText(138)} />
      <Chart17 profiles={data.Profiles || []} />

      <ReportText text={staticText(139)} />

      <ReportText text={staticText(140)} />

      <ReportText text={staticText(141)} />

      <ReportText text={staticText(142)} />

      <ReportText text={staticText(143)} />

      <ReportTitle title={staticTitle(144)} />
      <ReportText text={staticText(144)} />
    </>
  );
};

ReportContent.displayName = 'ReportContent';

export default ReportContent;
