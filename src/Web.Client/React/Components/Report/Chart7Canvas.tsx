import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { Chart, ChartConfiguration } from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart7CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart7Canvas = (props: Chart7CanvasProps): JSX.Element => {
  const { profiles = [], printing } = props;

  const classes = useStyles();

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Mediador')[0];

  const vermelho = profiles.filter((item): boolean => item.Name === 'Perfil Criativo')[0];

  const azul = profiles.filter((item): boolean => item.Name === 'Perfil Visionário')[0];

  const data = {
    labels: ['Adaptabilidade'],
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

  const refChart7 = useRef<HTMLCanvasElement>(null);
  const refImage7 = useRef<HTMLImageElement>(null);

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
    if (refChart7 && refChart7.current) {
      const newChartInstance = new Chart(refChart7.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage7 && refImage7.current) {
            refImage7.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart7]);
  return (
    <>
      <canvas ref={refChart7} style={{ display: (printing) ? 'none' : 'block' }} />
      <img alt="printing chart" ref={refImage7} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart7Canvas.displayName = 'Chart7Canvas';

export default Chart7Canvas;
