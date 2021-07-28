import dynamic from 'next/dynamic';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ReportPDFProps } from './ReportPDF';

const ReportDynamic = dynamic<ReportPDFProps>(
  (): Promise<any> => import('./ReportPDF').then((mod): any => mod.default),
  { ssr: false },
);

export default ReportDynamic;
