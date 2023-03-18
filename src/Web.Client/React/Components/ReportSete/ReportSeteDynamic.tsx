import dynamic from 'next/dynamic';
// eslint-disable-next-line no-unused-vars
import { ReportProps } from './ReportSete';

const ReportSeteDynamic = dynamic<ReportProps>(
  (): Promise<any> => import('./ReportSete').then((mod): any => mod.default),
  { ssr: false },
);

export default ReportSeteDynamic;
