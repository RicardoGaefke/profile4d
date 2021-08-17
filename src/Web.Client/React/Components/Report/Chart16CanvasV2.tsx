import React, { useEffect, useRef } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Chart, ChartConfiguration, BarController, CategoryScale, BarElement, ChartData, LinearScale, Title, Legend, Tooltip,
} from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart16CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart16CanvasV2 = (props: Chart16CanvasProps): JSX.Element => {
  const { profiles, printing } = props;

  const classes = useStyles();

  Chart.register(BarController, CategoryScale, BarElement, LinearScale, Title, Legend, Tooltip);

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Organizador')[0];

  const vermelho = profiles.filter((item): boolean => item.Name === 'Perfil Realizador')[0];

  const azul = profiles.filter((item): boolean => item.Name === 'Perfil Visionário')[0];

  const data = {
    labels: [
      `${amarelo.Name} - ${((amarelo.Total / 165) * 100).toFixed(2).toString()}%`,
      `${vermelho.Name} - ${((vermelho.Total / 165) * 100).toFixed(2).toString()}%`,
      `${azul.Name} - ${((azul.Total / 165) * 100).toFixed(2).toString()}%`,
    ],
    datasets: [
      {
        label: 'Visão sistêmica',
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

  const refChart16 = useRef<HTMLCanvasElement>(null);
  const refImage16 = useRef<HTMLImageElement>(null);

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
          text: '16. Visão sistêmica',
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
              size: 33,
              fontFamily: "'Roboto', sans-serif",
            },
            color: 'black',
          },
        },
        y: {
          max: 35,
          min: 0,
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
    if (refChart16 && refChart16.current) {
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
      <canvas ref={refChart16} style={{ display: (printing) ? 'none' : 'block' }} width="100%" />
      <img alt="printing chart" ref={refImage16} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart16CanvasV2.displayName = 'Chart16CanvasV2';

export default Chart16CanvasV2;
