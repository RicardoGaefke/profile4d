import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { Chart, ChartConfiguration } from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart13CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart13Canvas = (props: Chart13CanvasProps): JSX.Element => {
  const { profiles = [], printing } = props;

  const classes = useStyles();

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Organizador')[0];

  const vermelho = profiles.filter((item): boolean => item.Name === 'Perfil Criativo')[0];

  const azul = profiles.filter((item): boolean => item.Name === 'Perfil Visionário')[0];

  const data = {
    labels: ['Inovação / Criatividade'],
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

  const refChart13 = useRef<HTMLCanvasElement>(null);
  const refImage13 = useRef<HTMLImageElement>(null);

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
    if (refChart13 && refChart13.current) {
      const newChartInstance = new Chart(refChart13.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage13 && refImage13.current) {
            refImage13.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart13]);

  return (
    <>
      <canvas ref={refChart13} style={{ display: (printing) ? 'none' : 'block' }} />
      <img alt="printing chart" ref={refImage13} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart13Canvas.displayName = 'Chart13Canvas';

export default Chart13Canvas;
