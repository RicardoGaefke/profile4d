import React, { useEffect, useRef } from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Chart, ChartConfiguration, BarController, CategoryScale, BarElement, ChartData, LinearScale, Title, Legend, Tooltip,
} from 'chart.js';
// eslint-disable-next-line no-unused-vars
import { IProfiles } from '../../../../TypeScript/Interfaces/IProfiles';
import useStyles from './Styles';

export interface Chart2CanvasProps {
  profiles: IProfiles[];
  printing: boolean;
}

const Chart2CanvasV2 = (props: Chart2CanvasProps): JSX.Element => {
  const { profiles, printing } = props;
  const classes = useStyles();

  Chart.register(BarController, CategoryScale, BarElement, LinearScale, Title, Legend, Tooltip);

  const refChart = useRef<HTMLCanvasElement>(null);
  const refImage = useRef<HTMLImageElement | null>(null);

  const comandante = profiles.filter((item): boolean => item.Name === 'Perfil Comandante')[0].Total || 0;
  const mediador = profiles.filter((item): boolean => item.Name === 'Perfil Mediador')[0].Total || 0;
  const organizador = profiles.filter((item): boolean => item.Name === 'Perfil Organizador')[0].Total || 0;
  const prestativo = profiles.filter((item): boolean => item.Name === 'Perfil Prestativo')[0].Total || 0;
  const realizador = profiles.filter((item): boolean => item.Name === 'Perfil Realizador')[0].Total || 0;
  const criativo = profiles.filter((item): boolean => item.Name === 'Perfil Criativo')[0].Total || 0;
  const analitico = profiles.filter((item): boolean => item.Name === 'Perfil Analítico')[0].Total || 0;
  const planejador = profiles.filter((item): boolean => item.Name === 'Perfil Planejador')[0].Total || 0;
  const visionario = profiles.filter((item): boolean => item.Name === 'Perfil Visionário')[0].Total || 0;

  const data = {
    labels: [
      `Comandante - ${((comandante / 165) * 100).toFixed(2)}%`,
      `Mediador - ${((mediador / 165) * 100).toFixed(2)}%`,
      `Organizador - ${((organizador / 165) * 100).toFixed(2)}%`,
      `Prestativo - ${((prestativo / 165) * 100).toFixed(2)}%`,
      `Realizador - ${((realizador / 165) * 100).toFixed(2)}%`,
      `Criativo - ${((criativo / 165) * 100).toFixed(2)}%`,
      `Analítico - ${((analitico / 165) * 100).toFixed(2)}%`,
      `Planejador - ${((planejador / 165) * 100).toFixed(2)}%`,
      `Visionário - ${((visionario / 165) * 100).toFixed(2)}%`,
    ],
    datasets: [
      {
        data: [
          ((comandante / 165) * 100),
          ((mediador / 165) * 100),
          ((organizador / 165) * 100),
          ((prestativo / 165) * 100),
          ((realizador / 165) * 100),
          ((criativo / 165) * 100),
          ((analitico / 165) * 100),
          ((planejador / 165) * 100),
          ((visionario / 165) * 100),
        ],
        backgroundColor: [
          'rgba(230, 230, 0, .8)',
          'rgba(230, 230, 0, .8)',
          'rgba(230, 230, 0, .8)',
          'rgba(173, 0, 0, .8)',
          'rgba(173, 0, 0, .8)',
          'rgba(173, 0, 0, .8)',
          'rgba(0, 29, 86, .8)',
          'rgba(0, 29, 86, .8)',
          'rgba(0, 29, 86, .8)',
        ],
        borderColor: [
          'rgba(230, 230, 0, 1)',
          'rgba(230, 230, 0, 1)',
          'rgba(230, 230, 0, 1)',
          'rgba(173, 0, 0, 1)',
          'rgba(173, 0, 0, 1)',
          'rgba(173, 0, 0, 1)',
          'rgba(0, 29, 86, 1)',
          'rgba(0, 29, 86, 1)',
          'rgba(0, 29, 86, 1)',
        ],
        borderWidth: 2,
      },
    ],
  } as ChartData<'bar', number[], string>;

  const chartConfig = {
    type: 'bar',
    data,
    options: {
      plugins: {
        title: {
          display: false,
          text: '2. Perfis comportamentais e suas respectivas energias',
          color: 'black',
          font: {
            size: 20,
            fontFamily: "'Roboto', sans-serif",
          },
        },
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            maxRotation: 90,
            minRotation: 45,
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
              size: 30,
            },
            color: 'black',
          },
        },
      },
    },
  } as ChartConfiguration<'bar', number[], string>;

  useEffect((): void => {
    if (refChart && refChart.current) {
      const newChartInstance = new Chart(refChart.current, chartConfig);

      newChartInstance.options.animation = {
        onComplete: (): void => {
          if (refImage && refImage.current) {
            refImage.current.src = newChartInstance.toBase64Image();
          }
        },
      };
    }
  }, [refChart]);

  return (
    <>
      <canvas
        ref={refChart}
        style={{ display: (printing) ? 'none' : 'block' }}
        width="100%"
      />
      <img
        alt="printing chart"
        ref={refImage}
        className={classes.chartImageFull}
        style={{
          display: (printing) ? 'block' : 'none',
        }}
      />
    </>
  );
};

Chart2CanvasV2.displayName = 'Chart2CanvasV2';

export default Chart2CanvasV2;
