import React, { useEffect, useRef } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Chart, ChartConfiguration, BarController, CategoryScale, BarElement, ChartData, LinearScale, Title, Legend, Tooltip,
} from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart6CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart6CanvasV2 = (props: Chart6CanvasProps): JSX.Element => {
  const { profiles, printing } = props;

  const classes = useStyles();

  Chart.register(BarController, CategoryScale, BarElement, LinearScale, Title, Legend, Tooltip);

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Mediador')[0];

  const vermelho = profiles.filter((item): boolean => item.Name === 'Perfil Prestativo')[0];

  const azul = profiles.filter((item): boolean => item.Name === 'Perfil Planejador')[0];

  const data = {
    label: 'Resolução de conflitos',
    labels: [
      `${amarelo.Name} - ${((amarelo.Total / 165) * 100).toFixed(2).toString()}%`,
      `${vermelho.Name} - ${((vermelho.Total / 165) * 100).toFixed(2).toString()}%`,
      `${azul.Name} - ${((azul.Total / 165) * 100).toFixed(2).toString()}%`,
    ],
    datasets: [{
      label: 'Resolução de conflitos',
      data: [
        ((amarelo.Total / 165) * 100).toFixed(2),
        ((vermelho.Total / 165) * 100).toFixed(2),
        ((azul.Total / 165) * 100).toFixed(2),
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

  const refChart6 = useRef<HTMLCanvasElement>(null);
  const refImage6 = useRef<HTMLImageElement>(null);

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
          text: '6. Resolução de conflitos',
          font: {
            size: 33,
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
              size: 33,
              fontFamily: "'Roboto', sans-serif",
            },
            color: 'black',
          },
        },
        y: {
          min: 0,
          max: 35,
          ticks: {
            startAtZero: true,
            stepSize: 5,
            font: {
              size: 33,
              fontFamily: "'Roboto', sans-serif",
            },
            color: 'black',
          },
        },
      },
    },
  } as ChartConfiguration<'bar', number[], string>;

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
      <canvas ref={refChart6} style={{ display: (printing) ? 'none' : 'block' }} width="100%" />
      <img alt="printing chart" ref={refImage6} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart6CanvasV2.displayName = 'Chart6CanvasV2';

export default Chart6CanvasV2;
