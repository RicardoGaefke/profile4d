import {
  // eslint-disable-next-line no-unused-vars
  ChartConfiguration, Chart, PieController, ArcElement,
} from 'chart.js';
import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart1CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart1Canvas = (props: Chart1CanvasProps): JSX.Element => {
  const { profiles, printing } = props;

  const classes = useStyles();

  Chart.register(PieController, ArcElement);

  const refChart1 = useRef<HTMLCanvasElement>(null);
  const refImage1 = useRef<HTMLImageElement | null>(null);

  const comandante = profiles.filter((item): boolean => item.Name === 'Perfil Comandante')[0].Total || 0;
  const mediador = profiles.filter((item): boolean => item.Name === 'Perfil Mediador')[0].Total || 0;
  const organizador = profiles.filter((item): boolean => item.Name === 'Perfil Organizador')[0].Total || 0;
  const prestativo = profiles.filter((item): boolean => item.Name === 'Perfil Prestativo')[0].Total || 0;
  const realizador = profiles.filter((item): boolean => item.Name === 'Perfil Realizador')[0].Total || 0;
  const criativo = profiles.filter((item): boolean => item.Name === 'Perfil Criativo')[0].Total || 0;
  const analitico = profiles.filter((item): boolean => item.Name === 'Perfil Analítico')[0].Total || 0;
  const planejador = profiles.filter((item): boolean => item.Name === 'Perfil Planejador')[0].Total || 0;
  const visionario = profiles.filter((item): boolean => item.Name === 'Perfil Visionário')[0].Total || 0;

  // eslint-disable-next-line max-len
  const amarelo = parseFloat(((comandante / 165) * 100).toFixed(2)) + parseFloat(((mediador / 165) * 100).toFixed(2)) + parseFloat(((organizador / 165) * 100).toFixed(2));

  // eslint-disable-next-line max-len
  const vermelho = parseFloat(((prestativo / 165) * 100).toFixed(2)) + parseFloat(((realizador / 165) * 100).toFixed(2)) + parseFloat(((criativo / 165) * 100).toFixed(2));

  // eslint-disable-next-line max-len
  const azul = parseFloat(((analitico / 165) * 100).toFixed(2)) + parseFloat(((planejador / 165) * 100).toFixed(2)) + parseFloat(((visionario / 165) * 100).toFixed(2));

  const data = {
    datasets: [{
      data: [vermelho.toFixed(2), amarelo.toFixed(2), azul.toFixed(2)],
      backgroundColor: [
        '#c00000',
        '#ffff00',
        '#002060',
      ],
    }],
    labels: [
      `${vermelho.toFixed(2)}%`,
      `${amarelo.toFixed(2)}%`,
      `${azul.toFixed(2)}%`,
    ],
  };

  const chartConfig = {
    type: 'pie',
    data,
    legend: {
      position: 'bottom',
    },
  } as ChartConfiguration<'pie', string[], string>;

  useEffect((): void => {
    if (refChart1 && refChart1.current) {
      const newChartInstance = new Chart(refChart1.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage1 && refImage1.current) {
            refImage1.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart1]);

  return (
    <>
      <canvas ref={refChart1} style={{ display: (printing) ? 'none' : 'block' }} />
      <img alt="printing chart" ref={refImage1} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart1Canvas.displayName = 'Chart1Canvas';

export default Chart1Canvas;
