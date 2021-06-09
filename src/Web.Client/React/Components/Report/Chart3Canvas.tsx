import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { Chart, ChartConfiguration, BarController } from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart3CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart3Canvas = (props: Chart3CanvasProps): JSX.Element => {
  const { profiles = [], printing } = props;

  const classes = useStyles();

  Chart.register(BarController);

  const amarelos = profiles.filter((item): boolean => item.Color === 'Amarelo');
  amarelos.sort((a, b): number => b.Total - a.Total || b.InternalNumber - a.InternalNumber);
  const amarelo = amarelos[0];

  const vermelhos = profiles.filter((item): boolean => item.Color === 'Vermelho');
  vermelhos.sort((a, b): number => b.Total - a.Total || b.InternalNumber - a.InternalNumber);
  const vermelho = vermelhos[0];

  const azuis = profiles.filter((item): boolean => item.Color === 'Azul');
  azuis.sort((a, b): number => b.Total - a.Total || b.InternalNumber - a.InternalNumber);
  const azul = azuis[0];

  const data = {
    labels: ['Perfis comportamentais e suas respectivas energias'],
    datasets: [
      {
        label: `${amarelo.Name} - ${((amarelo.Total / 165) * 100).toFixed(2)}%`,
        data: [
          ((amarelo.Total / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#ffff00',
        ],
      },
      {
        label: `${vermelho.Name} - ${((vermelho.Total / 165) * 100).toFixed(2)}%`,
        data: [
          ((vermelho.Total / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#c00000',
        ],
      },
      {
        label: `${azul.Name} - ${((azul.Total / 165) * 100).toFixed(2)}%`,
        data: [
          ((azul.Total / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#002060',
        ],
      },
    ],
  };

  const refChart3 = useRef<HTMLCanvasElement>(null);
  const refImage3 = useRef<HTMLImageElement>(null);

  const chartConfig = {
    type: 'bar',
    data,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 35,
        },
      }],
    },
    legend: {
      position: 'bottom',
    },
  } as ChartConfiguration<'bar', string[], string>;

  useEffect((): void => {
    if (refChart3 && refChart3.current) {
      const newChartInstance = new Chart(refChart3.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage3 && refImage3.current) {
            refImage3.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart3]);
  return (
    <>
      <canvas ref={refChart3} style={{ display: (printing) ? 'none' : 'block' }} />
      <img alt="printing chart" ref={refImage3} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart3Canvas.displayName = 'Chart3Canvas';

export default Chart3Canvas;
