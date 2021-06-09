import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { Chart, ChartConfiguration, BarController } from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart9CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart9Canvas = (props: Chart9CanvasProps): JSX.Element => {
  const { profiles = [], printing } = props;

  const classes = useStyles();

  Chart.register(BarController);

  const amarelo = profiles.filter((item): boolean => item.Name === 'Perfil Mediador')[0];

  const vermelho = profiles.filter((item): boolean => item.Name === 'Perfil Prestativo')[0];

  const azul = profiles.filter((item): boolean => item.Name === 'Perfil Visionário')[0];

  const data = {
    labels: ['Relacionamento interpessoal'],
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

  const refChart9 = useRef<HTMLCanvasElement>(null);
  const refImage9 = useRef<HTMLImageElement>(null);

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
      <canvas ref={refChart9} style={{ display: (printing) ? 'none' : 'block' }} />
      <img alt="printing chart" ref={refImage9} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart9Canvas.displayName = 'Chart9Canvas';

export default Chart9Canvas;
