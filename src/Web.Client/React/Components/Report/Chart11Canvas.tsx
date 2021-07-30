import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { Chart, ChartConfiguration, BarController } from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart11CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart11Canvas = (props: Chart11CanvasProps): JSX.Element => {
  const { profiles = [], printing } = props;

  const classes = useStyles();

  Chart.register(BarController);

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Organizador')[0];

  const vermelho = profiles.filter((item): boolean => item.Name === 'Perfil Prestativo')[0];

  const azul = profiles.filter((item): boolean => item.Name === 'Perfil Planejador')[0];

  const data = {
    labels: ['Desenvolvimento de pessoas'],
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

  const refChart11 = useRef<HTMLCanvasElement>(null);
  const refImage11 = useRef<HTMLImageElement>(null);

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
    if (refChart11 && refChart11.current) {
      Chart.defaults.font.size = 16;
      const newChartInstance = new Chart(refChart11.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage11 && refImage11.current) {
            refImage11.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart11]);

  return (
    <>
      <canvas ref={refChart11} style={{ display: (printing) ? 'none' : 'block' }} />
      <img alt="printing chart" ref={refImage11} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart11Canvas.displayName = 'Chart11Canvas';

export default Chart11Canvas;
