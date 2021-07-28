import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Chart, ChartConfiguration, BarController } from 'chart.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart10CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart10Canvas = (props: Chart10CanvasProps): JSX.Element => {
  const { profiles = [], printing } = props;

  const classes = useStyles();

  Chart.register(BarController);

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Organizador')[0];

  const vermelho = profiles.filter((item): boolean => item.Name === 'Perfil Prestativo')[0];

  const azul = profiles.filter((item): boolean => item.Name === 'Perfil Analítico')[0];

  const data = {
    labels: ['Orientação para o cliente'],
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

  const refChart10 = useRef<HTMLCanvasElement>(null);
  const refImage10 = useRef<HTMLImageElement>(null);

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
    if (refChart10 && refChart10.current) {
      Chart.defaults.font.size = 16;
      const newChartInstance = new Chart(refChart10.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage10 && refImage10.current) {
            refImage10.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart10]);

  return (
    <>
      <canvas ref={refChart10} style={{ display: (printing) ? 'none' : 'block' }} />
      <img alt="printing chart" ref={refImage10} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart10Canvas.displayName = 'Chart10Canvas';

export default Chart10Canvas;
