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
      `${amarelo.Name} - ${((amarelo.Total / 165) * 100).toFixed(2).toString()}%`,
      `${vermelho.Name} - ${((vermelho.Total / 165) * 100).toFixed(2).toString()}%`,
      `${azul.Name} - ${((azul.Total / 165) * 100).toFixed(2).toString()}%`,
    ],
    datasets: [{
      label: 'Compromisso com a excelência',
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

  const refChart5 = useRef<HTMLCanvasElement>(null);
  const refImage5 = useRef<HTMLImageElement | null>(null);

  const chartConfig = {
    type: 'bar',
    data,
    options: {
      plugins: {
        title: {
          display: true,
          text: '5. Compromisso com a excelência',
          font: {
            size: 20,
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
              size: 20,
            },
          },
        },
        y: {
          ticks: {
            startAtZero: true,
            stepSize: 5,
            font: {
              size: 20,
            },
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
