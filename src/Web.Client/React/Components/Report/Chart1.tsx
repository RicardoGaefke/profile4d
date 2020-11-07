import React from 'react';
import { Pie } from 'react-chartjs-2';

export interface Chart1Props {
  Azul: number;
  Vermelho: number;
  Amarelo: number;
}

const Chart1 = (props: Chart1Props): JSX.Element => {
  const { Azul, Vermelho, Amarelo } = props;

  const total = Azul + Vermelho + Amarelo;

  const percentualAzul = ((Azul / total) * 100).toFixed(2);
  const percentualVermelho = ((Vermelho / total) * 100).toFixed(2);
  const percentualAmarelo = (100 - parseFloat(percentualAzul) - parseFloat(percentualVermelho)).toFixed(2);

  const data = {
    datasets: [{
      data: [Azul, Vermelho, Amarelo],
      backgroundColor: [
        '#002060',
        '#c00000',
        '#ffff00',
      ],
    }],
    labels: [
      `${percentualAzul} %`,
      `${percentualVermelho} %`,
      `${percentualAmarelo} %`,
    ],
  };

  return (
    <Pie
      data={data}
    />
  );
};

Chart1.displayName = 'Chart1';

export default Chart1;
