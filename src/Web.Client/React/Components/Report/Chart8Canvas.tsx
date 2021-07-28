import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Chart, ChartConfiguration, BarController } from 'chart.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart8CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart8Canvas = (props: Chart8CanvasProps): JSX.Element => {
  const { profiles = [], printing } = props;

  const classes = useStyles();

  Chart.register(BarController);

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Comandante')[0];

  const vermelho = profiles.filter((item): boolean => item.Name === 'Perfil Realizador')[0];

  const azul = profiles.filter((item): boolean => item.Name === 'Perfil Analítico')[0];

  const data = {
    labels: ['Proatividade'],
    datasets: [
      {
        label: `${amarelo.Name} - ${((amarelo.Total / 165) * 100).toFixed(2).toString()}%`,
        data: [
          ((amarelo.Total / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#ffff00',
        ],
      },
      {
        label: `${vermelho.Name} - ${((vermelho.Total / 165) * 100).toFixed(2).toString()}%`,
        data: [
          ((vermelho.Total / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#c00000',
        ],
      },
      {
        label: `${azul.Name} - ${((azul.Total / 165) * 100).toFixed(2).toString()}%`,
        data: [
          ((azul.Total / 165) * 100).toFixed(2),
        ],
        backgroundColor: [
          '#002060',
        ],
      },
    ],
  };

  const refChart8 = useRef<HTMLCanvasElement>(null);
  const refImage8 = useRef<HTMLImageElement>(null);

  const chartConfig = {
    type: 'bar',
    data,
    scales: {
      yAxes: [{
        ticks: {
          min: 0,
          max: 35,
        },
      }],
    },
    legend: {
      position: 'bottom',
    },
  } as ChartConfiguration<'bar', string[], string>;

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
      <canvas ref={refChart8} style={{ display: (printing) ? 'none' : 'block' }} />
      <img alt="printing chart" ref={refImage8} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart8Canvas.displayName = 'Chart8Canvas';

export default Chart8Canvas;
