import React, { useEffect, useRef } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Chart, ChartConfiguration, BarController, CategoryScale, BarElement, ChartData, LinearScale, Title, Legend, Tooltip,
} from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart9CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart9CanvasV2 = (props: Chart9CanvasProps): JSX.Element => {
  const { profiles, printing } = props;

  const classes = useStyles();

  Chart.register(BarController, CategoryScale, BarElement, LinearScale, Title, Legend, Tooltip);

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Mediador')[0];

  const vermelho = profiles.filter((item): boolean => item.Name === 'Perfil Prestativo')[0];

  const azul = profiles.filter((item): boolean => item.Name === 'Perfil Visionário')[0];

  const data = {
    labels: [
      `${amarelo.Name} - ${((amarelo.Total / 165) * 100).toFixed(2).toString()}%`,
      `${vermelho.Name} - ${((vermelho.Total / 165) * 100).toFixed(2).toString()}%`,
      `${azul.Name} - ${((azul.Total / 165) * 100).toFixed(2).toString()}%`,
    ],
    datasets: [{
      label: 'Relacionamento interpessoal',
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

  const refChart9 = useRef<HTMLCanvasElement>(null);
  const refImage9 = useRef<HTMLImageElement>(null);

  const chartConfig = {
    type: 'bar',
    data,
    options: {
      plugins: {
        title: {
          display: true,
          text: '9. Relacionamento interpessoal',
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
    if (refChart9 && refChart9.current) {
      const newChartInstance = new Chart(refChart9.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage9 && refImage9.current) {
            refImage9.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart9]);

  return (
    <>
      <canvas ref={refChart9} style={{ display: (printing) ? 'none' : 'block' }} width="100%" />
      <img alt="printing chart" ref={refImage9} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart9CanvasV2.displayName = 'Chart9CanvasV2';

export default Chart9CanvasV2;
