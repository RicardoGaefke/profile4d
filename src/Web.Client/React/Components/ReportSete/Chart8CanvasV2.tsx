import React, { useEffect, useRef } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Chart, ChartConfiguration, BarController, CategoryScale, BarElement, ChartData, LinearScale, Title, Legend, Tooltip,
} from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart8CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart8CanvasV2 = (props: Chart8CanvasProps): JSX.Element => {
  const { profiles, printing } = props;

  const classes = useStyles();

  Chart.register(BarController, CategoryScale, BarElement, LinearScale, Title, Legend, Tooltip);

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Comandante')[0];

  const vermelho = profiles.filter((item): boolean => item.Name === 'Perfil Realizador')[0];

  const azul = profiles.filter((item): boolean => item.Name === 'Perfil Analítico')[0];

  const data = {
    labels: [
      `${amarelo.Name} - ${((amarelo.Total / 77) * 100).toFixed(2).toString()}%`,
      `${vermelho.Name} - ${((vermelho.Total / 77) * 100).toFixed(2).toString()}%`,
      `${azul.Name} - ${((azul.Total / 77) * 100).toFixed(2).toString()}%`,
    ],
    datasets: [{
      label: 'Proatividade',
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

  const refChart8 = useRef<HTMLCanvasElement>(null);
  const refImage8 = useRef<HTMLImageElement>(null);

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
          text: '8. Proatividade',
          font: {
            size: 33,
            fontFamily: "'Poppins', sans-serif",
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
    if (refChart8 && refChart8.current) {
      const newChartInstance = new Chart(refChart8.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage8 && refImage8.current) {
            refImage8.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart8]);

  return (
    <>
      <canvas ref={refChart8} style={{ display: (printing) ? 'none' : 'block' }} width="100%" />
      <img alt="printing chart" ref={refImage8} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart8CanvasV2.displayName = 'Chart8CanvasV2';

export default Chart8CanvasV2;
