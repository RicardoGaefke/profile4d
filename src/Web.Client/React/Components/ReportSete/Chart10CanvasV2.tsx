import React, { useEffect, useRef } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Chart, ChartConfiguration, BarController, CategoryScale, BarElement, ChartData, LinearScale, Title, Legend, Tooltip,
} from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart10CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart10CanvasV2 = (props: Chart10CanvasProps): JSX.Element => {
  const { profiles, printing } = props;

  const classes = useStyles();

  Chart.register(BarController, CategoryScale, BarElement, LinearScale, Title, Legend, Tooltip);

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Organizador')[0];

  const vermelho = profiles.filter((item): boolean => item.Name === 'Perfil Prestativo')[0];

  const azul = profiles.filter((item): boolean => item.Name === 'Perfil Analítico')[0];

  const data = {
    labels: [
      `${amarelo.Name} - ${((amarelo.Total / 77) * 100).toFixed(2).toString()}%`,
      `${vermelho.Name} - ${((vermelho.Total / 77) * 100).toFixed(2).toString()}%`,
      `${azul.Name} - ${((azul.Total / 77) * 100).toFixed(2).toString()}%`,
    ],
    datasets: [
      {
        label: 'Orientação para o cliente',
        data: [
          ((amarelo.Total / 77) * 100).toFixed(2),
          ((vermelho.Total / 77) * 100).toFixed(2),
          ((azul.Total / 77) * 100).toFixed(2),
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

  const refChart10 = useRef<HTMLCanvasElement>(null);
  const refImage10 = useRef<HTMLImageElement>(null);

  const chartConfig = {
    type: 'bar',
    data,
    options: {
      plugins: {
        title: {
          display: false,
          text: '10. Orientação para o cliente',
          font: {
            size: 33,
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
              size: 33,
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
              size: 33,
              fontFamily: "'Poppins', sans-serif",
            },
            color: 'black',
          },
        },
      },
    },
  } as ChartConfiguration<'bar', number[], string>;

  useEffect((): void => {
    if (refChart10 && refChart10.current) {
      const newChartInstance = new Chart(refChart10.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage10 && refImage10.current) {
            refImage10.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart10]);

  return (
    <>
      <canvas ref={refChart10} style={{ display: (printing) ? 'none' : 'block' }} width="100%" />
      <img alt="printing chart" ref={refImage10} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart10CanvasV2.displayName = 'Chart10CanvasV2';

export default Chart10CanvasV2;
