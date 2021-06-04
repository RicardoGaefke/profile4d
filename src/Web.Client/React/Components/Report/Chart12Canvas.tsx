import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { Chart, ChartConfiguration } from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart12CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart12Canvas = (props: Chart12CanvasProps): JSX.Element => {
  const { profiles = [], printing } = props;

  const classes = useStyles();

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Mediador')[0];

  const vermelho = profiles.filter((item): boolean => item.Name === 'Perfil Realizador')[0];

  const azul = profiles.filter((item): boolean => item.Name === 'Perfil Visionário')[0];

  const data = {
    labels: ['Negociação / Persuasão'],
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

  const refChart12 = useRef<HTMLCanvasElement>(null);
  const refImage12 = useRef<HTMLImageElement>(null);

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
    if (refChart12 && refChart12.current) {
      const newChartInstance = new Chart(refChart12.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage12 && refImage12.current) {
            refImage12.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart12]);

  return (
    <>
      <canvas ref={refChart12} style={{ display: (printing) ? 'none' : 'block' }} />
      <img alt="printing chart" ref={refImage12} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart12Canvas.displayName = 'Chart12Canvas';

export default Chart12Canvas;
