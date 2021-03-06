import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { Chart, ChartConfiguration } from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart16CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart16Canvas = (props: Chart16CanvasProps): JSX.Element => {
  const { profiles = [], printing } = props;

  const classes = useStyles();

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Organizador')[0];

  const vermelho = profiles.filter((item): boolean => item.Name === 'Perfil Realizador')[0];

  const azul = profiles.filter((item): boolean => item.Name === 'Perfil Visionário')[0];

  const data = {
    labels: ['Visão sistêmica'],
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

  const refChart16 = useRef<HTMLCanvasElement>(null);
  const refImage16 = useRef<HTMLImageElement>(null);

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
    if (refChart16 && refChart16.current) {
      Chart.defaults.font.size = 16;
      const newChartInstance = new Chart(refChart16.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage16 && refImage16.current) {
            refImage16.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart16]);

  return (
    <>
      <canvas ref={refChart16} style={{ display: (printing) ? 'none' : 'block' }} />
      <img alt="printing chart" ref={refImage16} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart16Canvas.displayName = 'Chart16Canvas';

export default Chart16Canvas;
