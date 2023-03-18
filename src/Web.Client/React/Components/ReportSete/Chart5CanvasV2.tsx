import React, { useEffect, useRef } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Chart, ChartConfiguration, BarController, ChartData, CategoryScale, LinearScale, BarElement, Title, Legend, Tooltip,
} from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart5CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart5CanvasV2 = (props: Chart5CanvasProps): JSX.Element => {
  const { profiles, printing } = props;

  const classes = useStyles();

  Chart.register(BarController, CategoryScale, LinearScale, BarElement, Title, Legend, Tooltip);

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Organizador')[0];

  const vermelho = profiles.filter((item): boolean => item.Name === 'Perfil Criativo')[0];

  const azul = profiles.filter((item): boolean => item.Name === 'Perfil Analítico')[0];

  const data = {
    labels: [
      `${amarelo.Name} - ${((amarelo.Total / 77) * 100).toFixed(2).toString()}%`,
      `${vermelho.Name} - ${((vermelho.Total / 77) * 100).toFixed(2).toString()}%`,
      `${azul.Name} - ${((azul.Total / 77) * 100).toFixed(2).toString()}%`,
    ],
    datasets: [{
      label: 'Compromisso com a excelência',
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

  const refChart5 = useRef<HTMLCanvasElement>(null);
  const refImage5 = useRef<HTMLImageElement | null>(null);

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
          text: '5. Compromisso com a excelência',
          color: 'black',
          font: {
            size: 33,
          },
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
          max: 100,
          min: 0,
          stepSize: 10,
          ticks: {
            startAtZero: true,
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
    if (refChart5 && refChart5.current) {
      const newChartInstance = new Chart(refChart5.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage5 && refImage5.current) {
            refImage5.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart5]);
  return (
    <>
      <canvas
        ref={refChart5}
        style={{ display: (printing) ? 'none' : 'block' }}
        width="100%"
      />
      <img
        alt="printing chart"
        ref={refImage5}
        className={classes.chartImage}
        style={{
          display: (printing) ? 'block' : 'none',
        }}
      />
    </>
  );
};

Chart5CanvasV2.displayName = 'Chart5CanvasV2';

export default Chart5CanvasV2;
