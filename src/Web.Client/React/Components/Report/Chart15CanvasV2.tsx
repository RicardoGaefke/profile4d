import React, { useEffect, useRef } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Chart, ChartConfiguration, BarController, CategoryScale, BarElement, ChartData, LinearScale, Title, Legend, Tooltip,
} from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart15CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart15CanvasV2 = (props: Chart15CanvasProps): JSX.Element => {
  const { profiles, printing } = props;

  const classes = useStyles();

  Chart.register(BarController, CategoryScale, BarElement, LinearScale, Title, Legend, Tooltip);

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Organizador')[0];

  const vermelho = profiles.filter((item): boolean => item.Name === 'Perfil Realizador')[0];

  const azul = profiles.filter((item): boolean => item.Name === 'Perfil Planejador')[0];

  const data = {
    labels: [
      `${amarelo.Name} - ${((amarelo.Total / 55) * 100).toFixed(2).toString()}%`,
      `${vermelho.Name} - ${((vermelho.Total / 55) * 100).toFixed(2).toString()}%`,
      `${azul.Name} - ${((azul.Total / 55) * 100).toFixed(2).toString()}%`,
    ],
    datasets: [
      {
        label: 'Planejamento estratégico',
        data: [
          ((amarelo.Total / 55) * 100).toFixed(2),
          ((vermelho.Total / 55) * 100).toFixed(2),
          ((azul.Total / 55) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#ffff00',
          '#c00000',
          '#002060',
        ],
        borderColor: [
          '#ffff00',
          '#c00000',
          '#002060',
        ],
        borderWidth: 2,
      },
    ],

  } as unknown as ChartData<'bar', number[], string>;

  const refChart15 = useRef<HTMLCanvasElement>(null);
  const refImage15 = useRef<HTMLImageElement>(null);

  const chartConfig = {
    type: 'bar',
    data,
    options: {
      layout: {
        padding: {
          top: 45,
          bottom: 45,
        },
      },
      plugins: {
        title: {
          display: false,
          text: '15. Planejamento estratégico',
          font: {
            size: 30,
            fontFamily: "'Roboto', sans-serif",
          },
          color: 'black',
        },
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 30,
              fontFamily: "'Roboto', sans-serif",
            },
            color: 'black',
          },
        },
        y: {
          max: 100,
          min: 0,
          ticks: {
            startAtZero: true,
            stepSize: 10,
            font: {
              size: 30,
            },
            color: 'black',
          },
        },
      },
    },
  } as ChartConfiguration<'bar', number[], string>;

  useEffect((): void => {
    if (refChart15 && refChart15.current) {
      const newChartInstance = new Chart(refChart15.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage15 && refImage15.current) {
            refImage15.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart15]);

  return (
    <>
      <canvas ref={refChart15} style={{ display: (printing) ? 'none' : 'block' }} width="100%" />
      <img alt="printing chart" ref={refImage15} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart15CanvasV2.displayName = 'Chart15CanvasV2';

export default Chart15CanvasV2;
