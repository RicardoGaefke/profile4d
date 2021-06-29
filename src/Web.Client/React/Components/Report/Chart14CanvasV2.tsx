import React, { useEffect, useRef } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Chart, ChartConfiguration, BarController, CategoryScale, BarElement, ChartData, LinearScale,
} from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart14CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart14CanvasV2 = (props: Chart14CanvasProps): JSX.Element => {
  const { profiles, printing } = props;

  const classes = useStyles();

  Chart.register(BarController, CategoryScale, BarElement, LinearScale);

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Comandante')[0];

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
        label: 'Orientação para resultados',
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
  }as unknown as ChartData<'bar', number[], string>;

  const refChart14 = useRef<HTMLCanvasElement>(null);
  const refImage14 = useRef<HTMLImageElement>(null);

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
    if (refChart14 && refChart14.current) {
      const newChartInstance = new Chart(refChart14.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage14 && refImage14.current) {
            refImage14.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart14]);

  return (
    <>
      <canvas ref={refChart14} style={{ display: (printing) ? 'none' : 'block' }} width="100%" />
      <img alt="printing chart" ref={refImage14} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart14CanvasV2.displayName = 'Chart14CanvasV2';

export default Chart14CanvasV2;
