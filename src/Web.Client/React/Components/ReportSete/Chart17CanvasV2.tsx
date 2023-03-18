import React, { useEffect, useRef } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Chart, ChartConfiguration, BarController, CategoryScale, BarElement, ChartData, LinearScale, Title, Legend, Tooltip,
} from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart17CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart17CanvasV2 = (props: Chart17CanvasProps): JSX.Element => {
  const { profiles, printing } = props;

  const classes = useStyles();

  Chart.register(BarController, CategoryScale, BarElement, LinearScale, Title, Legend, Tooltip);

  const prestativo = profiles.filter((item): boolean => item.Name === 'Perfil Prestativo')[0];
  const visionario = profiles.filter((item): boolean => item.Name === 'Perfil Visionário')[0];
  const mediador = profiles.filter((item): boolean => item.Name === 'Perfil Mediador')[0];

  // eslint-disable-next-line max-len
  const vermelho = parseFloat(((prestativo.Total / 231) * 100).toFixed(2)) + parseFloat(((visionario.Total / 231) * 100).toFixed(2)) + parseFloat(((mediador.Total / 231) * 100).toFixed(2));

  const criativo = profiles.filter((item): boolean => item.Name === 'Perfil Criativo')[0];
  const organizador = profiles.filter((item): boolean => item.Name === 'Perfil Organizador')[0];

  // eslint-disable-next-line max-len
  const verde = parseFloat(((visionario.Total / 231) * 100).toFixed(2)) + parseFloat(((criativo.Total / 231) * 100).toFixed(2)) + parseFloat(((organizador.Total / 231) * 100).toFixed(2));

  const planejador = profiles.filter((item): boolean => item.Name === 'Perfil Planejador')[0];
  const analitico = profiles.filter((item): boolean => item.Name === 'Perfil Analítico')[0];

  // eslint-disable-next-line max-len
  const azul = parseFloat(((planejador.Total / 231) * 100).toFixed(2)) + parseFloat(((analitico.Total / 231) * 100).toFixed(2)) + parseFloat(((organizador.Total / 231) * 100).toFixed(2));

  const comandante = profiles.filter((item): boolean => item.Name === 'Perfil Comandante')[0];
  const realizador = profiles.filter((item): boolean => item.Name === 'Perfil Realizador')[0];

  // eslint-disable-next-line max-len
  const amarelo = parseFloat(((organizador.Total / 231) * 100).toFixed(2)) + parseFloat(((comandante.Total / 231) * 100).toFixed(2)) + parseFloat(((realizador.Total / 231) * 100).toFixed(2));

  const data = {
    labels: [
      `Relacionamento - ${vermelho.toFixed(2)}%`,
      `Execução e controle - ${amarelo.toFixed(2)}%`,
      `Inovação e Criatividade - ${verde.toFixed(2)}%`,
      `Planejamento - ${azul.toFixed(2)}%`,
    ],
    datasets: [
      {
        label: '',
        data: [
          vermelho.toFixed(2),
          amarelo.toFixed(2),
          verde.toFixed(2),
          azul.toFixed(2),
        ],
        backgroundColor: [
          '#e04d53',
          '#fee433',
          '#6bd78b',
          '#43a9d7',
        ],
        borderWidth: 1,
        axis: 'y',
        fill: false,
      },
    ],
  } as unknown as ChartData<'bar', number[], string>;

  const refChart17 = useRef<HTMLCanvasElement>(null);
  const refImage17 = useRef<HTMLImageElement>(null);

  const chartConfig = {
    type: 'bar',
    data,
    options: {
      layout: {
        padding: {
          top: 50,
          bottom: 50,
        },
      },
      plugins: {
        title: {
          display: false,
          text: '17. Energia por área de atuação',
          font: {
            size: 28,
            fontFamily: "'Roboto', sans-serif",
          },
          color: 'black',
        },
        legend: {
          display: false,
        },
      },
      indexAxis: 'y',
      scales: {
        x: {
          ticks: {
            font: {
              size: 28,
              fontFamily: "'Roboto', sans-serif",
            },
            color: 'black',
          },
        },
        y: {
          ticks: {
            startAtZero: true,
            stepSize: 5,
            font: {
              size: 28,
              fontFamily: "'Roboto', sans-serif",
            },
            color: 'black',
          },
        },
      },
    },
  } as ChartConfiguration<'bar', number[], string>;

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

Chart17CanvasV2.displayName = 'Chart17CanvasV2';

export default Chart17CanvasV2;
