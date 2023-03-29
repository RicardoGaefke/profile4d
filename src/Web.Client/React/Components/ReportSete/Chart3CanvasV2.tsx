import React, { useEffect, useRef } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Chart, ChartConfiguration, BarController, ChartData, CategoryScale, LinearScale, BarElement, Title, Legend, Tooltip,
} from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart3CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart3CanvasV2 = (props: Chart3CanvasProps): JSX.Element => {
  const { profiles, printing } = props;

  const classes = useStyles();

  Chart.register(BarController, CategoryScale, LinearScale, BarElement, Title, Legend, Tooltip);

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
    labels: [
      `${amarelo.Name} - ${((amarelo.Total / 77) * 100).toFixed(2)}%`,
      `${vermelho.Name} - ${((vermelho.Total / 77) * 100).toFixed(2)}%`,
      `${azul.Name} - ${((azul.Total / 77) * 100).toFixed(2)}%`,
    ],
    datasets: [
      {
        label: '',
        data: [
          ((amarelo.Total / 77) * 100),
          ((vermelho.Total / 77) * 100),
          ((azul.Total / 77) * 100),
        ],
        backgroundColor: [
          'rgba(230, 230, 0, .8)',
          'rgba(173, 0, 0, .8)',
          'rgba(0, 29, 86, .8)',
        ],
        borderColor: [
          'rgba(230, 230, 0, 1)',
          'rgba(173, 0, 0, 1)',
          'rgba(0, 29, 86, 1)',
        ],
        borderWidth: 2,
      },
    ],
  } as ChartData<'bar', number[], string>;

  const refChart3 = useRef<HTMLCanvasElement>(null);
  const refImage3 = useRef<HTMLImageElement>(null);

  const chartConfig = {
    type: 'bar',
    data,
    options: {
      layout: {
        padding: {
          top: 50,
          bottom: 50,
        },
      },
      plugins: {
        title: {
          display: false,
          text: '3. Perfis dominantes',
          color: 'black',
          font: {
            size: 20,
            fontFamily: 'Poppins',
          },
        },
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            maxRotation: 90,
            minRotation: 15,
            font: {
              size: 30,
              fontFamily: "'Poppins', sans-serif",
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
              fontFamily: "'Poppins', sans-serif",
            },
            color: 'black',
          },
        },
      },
    },
  } as ChartConfiguration<'bar', number[], string>;

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
      <canvas ref={refChart3} style={{ display: (printing) ? 'none' : 'block' }} width="100%" />
      <img alt="printing chart" ref={refImage3} className={classes.chartImageFull} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart3CanvasV2.displayName = 'Chart3CanvasV2';

export default Chart3CanvasV2;
