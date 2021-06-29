import React, { useEffect, useRef } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Chart, ChartConfiguration, BarController, ChartData, CategoryScale, LinearScale, BarElement,
} from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart7CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart7CanvasV2 = (props: Chart7CanvasProps): JSX.Element => {
  const { profiles, printing } = props;

  const classes = useStyles();

  Chart.register(BarController, CategoryScale, LinearScale, BarElement);

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Mediador')[0];

  const vermelho = profiles.filter((item): boolean => item.Name === 'Perfil Criativo')[0];

  const azul = profiles.filter((item): boolean => item.Name === 'Perfil Visionário')[0];

  const data = {
    label: [
      `${amarelo.Name} - ${((amarelo.Total / 165) * 100).toFixed(2).toString()}%`,
      `${vermelho.Name} - ${((vermelho.Total / 165) * 100).toFixed(2).toString()}%`,
      `${azul.Name} - ${((azul.Total / 165) * 100).toFixed(2).toString()}%`,
    ],
    datasets: [
      {
        label: 'Adaptabilidade',
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

  const refChart7 = useRef<HTMLCanvasElement>(null);
  const refImage7 = useRef<HTMLImageElement>(null);

  const chartConfig = {
    responsive: false,
    scaleShowValues: true,
    type: 'bar',
    data,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          autoSkip: false,
          stepSize: 5,
          max: 35,
          includeBounds: true,
          display: true,
          showLabelBackdrop: true,
        },
      }],
      xAxes: [
        {
          ticks: {
            maxRotation: 90,
            minRotation: 80,
            autoSkip: false,
          },
          gridLines: {
            offsetGridLines: true,
          },
        },
        {
          position: 'top',
          ticks: {
            maxRotation: 90,
            minRotation: 80,
            autoSkip: false,
          },
          gridLines: {
            offsetGridLines: true,
          },
        },
      ],
    },
  } as ChartConfiguration<'bar', number[], string>;

  useEffect((): void => {
    if (refChart7 && refChart7.current) {
      const newChartInstance = new Chart(refChart7.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage7 && refImage7.current) {
            refImage7.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart7]);
  return (
    <>
      <canvas ref={refChart7} style={{ display: (printing) ? 'none' : 'block' }} width="100%" />
      <img alt="printing chart" ref={refImage7} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart7CanvasV2.displayName = 'Chart7CanvasV2';

export default Chart7CanvasV2;
