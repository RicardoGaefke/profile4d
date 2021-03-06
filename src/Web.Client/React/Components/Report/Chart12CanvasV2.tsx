import React, { useEffect, useRef } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Chart, ChartConfiguration, BarController, CategoryScale, BarElement, ChartData, LinearScale,
} from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart12CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart12CanvasV2 = (props: Chart12CanvasProps): JSX.Element => {
  const { profiles, printing } = props;

  const classes = useStyles();

  Chart.register(BarController, CategoryScale, BarElement, LinearScale);

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Mediador')[0];

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
        label: 'Negociação / Persuasão',
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

  const refChart12 = useRef<HTMLCanvasElement>(null);
  const refImage12 = useRef<HTMLImageElement>(null);

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
    if (refChart12 && refChart12.current) {
      const newChartInstance = new Chart(refChart12.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage12 && refImage12.current) {
            refImage12.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart12]);

  return (
    <>
      <canvas ref={refChart12} style={{ display: (printing) ? 'none' : 'block' }} width="100%" />
      <img alt="printing chart" ref={refImage12} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart12CanvasV2.displayName = 'Chart12CanvasV2';

export default Chart12CanvasV2;
