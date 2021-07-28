import React, { useEffect, useRef } from 'react';
import {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Chart, ChartConfiguration, BarController, ChartData, CategoryScale, LinearScale, BarElement,
} from 'chart.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart3CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart3Canvas = (props: Chart3CanvasProps): JSX.Element => {
  const { profiles = [], printing } = props;

  const classes = useStyles();

  Chart.register(BarController, CategoryScale, LinearScale, BarElement);

  const amarelos = profiles.filter((item): boolean => item.Color === 'Amarelo');
  amarelos.sort((a, b): number => b.Total - a.Total || b.InternalNumber - a.InternalNumber);
  const amarelo = amarelos[0];

  const vermelhos = profiles.filter((item): boolean => item.Color === 'Vermelho');
  vermelhos.sort((a, b): number => b.Total - a.Total || b.InternalNumber - a.InternalNumber);
  const vermelho = vermelhos[0];

  const azuis = profiles.filter((item): boolean => item.Color === 'Azul');
  azuis.sort((a, b): number => b.Total - a.Total || b.InternalNumber - a.InternalNumber);
  const azul = azuis[0];

  const data = {
    labels: [
      `${amarelo.Name} - ${((amarelo.Total / 165) * 100).toFixed(2)}%`,
      `${vermelho.Name} - ${((vermelho.Total / 165) * 100).toFixed(2)}%`,
      `${azul.Name} - ${((azul.Total / 165) * 100).toFixed(2)}%`,
    ],
    datasets: [
      {
        label: '3. Perfis dominantes',
        data: [
          ((amarelo.Total / 165) * 100),
          ((vermelho.Total / 165) * 100),
          ((azul.Total / 165) * 100),
        ],
        backgroundColor: [
          'rgba(230, 230, 0, .8)',
          'rgba(173, 0, 0, .8)',
          'rgba(0, 29, 86, .8)',
        ],
        borderColor: [
          'rgba(230, 230, 0, 1)',
          'rgba(173, 0, 0, 1)',
          'rgba(0, 29, 86, 1)',
        ],
        borderWidth: 2,
      },
    ],
  } as ChartData<'bar', number[], string>;

  const refChart3 = useRef<HTMLCanvasElement>(null);
  const refImage3 = useRef<HTMLImageElement>(null);

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
    options: {
      plugins: {
        legend: {
          display: true,
          text: 'legend',
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
    },
  } as ChartConfiguration<'bar', number[], string>;

  useEffect((): void => {
    if (refChart3 && refChart3.current) {
      const newChartInstance = new Chart(refChart3.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage3 && refImage3.current) {
            refImage3.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart3]);
  return (
    <>
      <canvas ref={refChart3} style={{ display: (printing) ? 'none' : 'block' }} />
      <img alt="printing chart" ref={refImage3} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart3Canvas.displayName = 'Chart3Canvas';

export default Chart3Canvas;
