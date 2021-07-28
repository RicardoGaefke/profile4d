import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Chart, ChartConfiguration, BarController } from 'chart.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart6CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart6Canvas = (props: Chart6CanvasProps): JSX.Element => {
  const { profiles = [], printing } = props;

  const classes = useStyles();

  Chart.register(BarController);

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Mediador')[0];

  const vermelho = profiles.filter((item): boolean => item.Name === 'Perfil Prestativo')[0];

  const azul = profiles.filter((item): boolean => item.Name === 'Perfil Planejador')[0];

  const data = {
    labels: ['Resolução de conflitos'],
    datasets: [
      {
        label: `${amarelo.Name} - ${((amarelo.Total / 165) * 100).toFixed(2).toString()}%`,
        data: [
          ((amarelo.Total / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#ffff00',
        ],
      },
      {
        label: `${vermelho.Name} - ${((vermelho.Total / 165) * 100).toFixed(2).toString()}%`,
        data: [
          ((vermelho.Total / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#c00000',
        ],
      },
      {
        label: `${azul.Name} - ${((azul.Total / 165) * 100).toFixed(2).toString()}%`,
        data: [
          ((azul.Total / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#002060',
        ],
      },
    ],
  };

  const refChart6 = useRef<HTMLCanvasElement>(null);
  const refImage6 = useRef<HTMLImageElement>(null);

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
    if (refChart6 && refChart6.current) {
      const newChartInstance = new Chart(refChart6.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage6 && refImage6.current) {
            refImage6.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart6]);
  return (
    <>
      <canvas ref={refChart6} style={{ display: (printing) ? 'none' : 'block' }} />
      <img alt="printing chart" ref={refImage6} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart6Canvas.displayName = 'Chart6Canvas';

export default Chart6Canvas;
