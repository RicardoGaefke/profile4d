import dynamic from 'next/dynamic';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReportProps } from './Report';

const ReportDynamic = dynamic<ReportProps>(
  (): Promise<any> => import('./Report').then((mod): any => mod.default),
  { ssr: false },
);

export default ReportDynamic;
