import React, { useEffect, useRef } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Chart, ChartConfiguration, LinearScale, BarController, BarElement,
} from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart17CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart17Canvas = (props: Chart17CanvasProps): JSX.Element => {
  const { profiles = [], printing } = props;

  const classes = useStyles();

  Chart.register(LinearScale, BarController, BarElement);

  const prestativo = profiles.filter((item): boolean => item.Name === 'Perfil Prestativo')[0];
  const visionario = profiles.filter((item): boolean => item.Name === 'Perfil Visionário')[0];
  const mediador = profiles.filter((item): boolean => item.Name === 'Perfil Mediador')[0];

  // eslint-disable-next-line max-len
  const vermelho = parseFloat(((prestativo.Total / 165) * 100).toFixed(2)) + parseFloat(((visionario.Total / 165) * 100).toFixed(2)) + parseFloat(((mediador.Total / 165) * 100).toFixed(2));

  const criativo = profiles.filter((item): boolean => item.Name === 'Perfil Criativo')[0];
  const organizador = profiles.filter((item): boolean => item.Name === 'Perfil Organizador')[0];

  // eslint-disable-next-line max-len
  const verde = parseFloat(((visionario.Total / 165) * 100).toFixed(2)) + parseFloat(((criativo.Total / 165) * 100).toFixed(2)) + parseFloat(((organizador.Total / 165) * 100).toFixed(2));

  const planejador = profiles.filter((item): boolean => item.Name === 'Perfil Planejador')[0];
  const analitico = profiles.filter((item): boolean => item.Name === 'Perfil Analítico')[0];

  // eslint-disable-next-line max-len
  const azul = parseFloat(((planejador.Total / 165) * 100).toFixed(2)) + parseFloat(((analitico.Total / 165) * 100).toFixed(2)) + parseFloat(((organizador.Total / 165) * 100).toFixed(2));

  const comandante = profiles.filter((item): boolean => item.Name === 'Perfil Comandante')[0];
  const realizador = profiles.filter((item): boolean => item.Name === 'Perfil Realizador')[0];

  // eslint-disable-next-line max-len
  const amarelo = parseFloat(((organizador.Total / 165) * 100).toFixed(2)) + parseFloat(((comandante.Total / 165) * 100).toFixed(2)) + parseFloat(((realizador.Total / 165) * 100).toFixed(2));

  const data = {
    labels: ['Energia por área de atuação'],
    datasets: [
      {
        axis: 'y',
        label: `Relacionamento - ${vermelho.toFixed(2)}%`,
        data: [
          vermelho.toFixed(2),
        ],
        backgroundColor: [
          '#e04d53',
        ],
        fill: false,
        borderWidth: 1,
      },
      {
        axis: 'y',
        label: `Execução e controle - ${amarelo.toFixed(2)}%`,
        data: [
          amarelo.toFixed(2),
        ],
        backgroundColor: [
          '#fee433',
        ],
        fill: false,
        borderWidth: 1,
      },
      {
        axis: 'y',
        label: `Inovação e Criatividade - ${verde.toFixed(2)}%`,
        data: [
          verde.toFixed(2),
        ],
        backgroundColor: [
          '#6bd78b',
        ],
        fill: false,
        borderWidth: 1,
      },
      {
        axis: 'y',
        label: `Planejamento - ${azul.toFixed(2)}%`,
        data: [
          azul.toFixed(2),
        ],
        backgroundColor: [
          '#43a9d7',
        ],
        fill: false,
        borderWidth: 1,
      },
    ],
  };

  const refChart17 = useRef<HTMLCanvasElement>(null);
  const refImage17 = useRef<HTMLImageElement>(null);

  const chartConfig = {
    type: 'bar',
    data,
    options: {
      indexAxis: 'y',
      scales: {
        y: {
          ticks: {
            min: 0,
            max: 100,
            stacked: true,
          },
          yAxes: [{
            ticks: { beginAtZero: true },
          }],
        },
      },
    },
    legend: {
      position: 'bottom',
    },
  } as ChartConfiguration<'bar', string[], string>;

  useEffect((): void => {
    if (refChart17 && refChart17.current) {
      const newChartInstance = new Chart(refChart17.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage17 && refImage17.current) {
            refImage17.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart17]);

  return (
    <>
      <canvas ref={refChart17} style={{ display: (printing) ? 'none' : 'block' }} />
      <img alt="printing chart" ref={refImage17} className={classes.chartImage} style={{ display: (printing) ? 'block' : 'none' }} />
    </>
  );
};

Chart17Canvas.displayName = 'Chart17Canvas';

export default Chart17Canvas;
