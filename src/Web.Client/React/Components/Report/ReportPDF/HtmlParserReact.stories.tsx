/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
// eslint-disable-next-line no-unused-vars
import ReactPDF, {
  PDFViewer, Document, Page, View, Text,
} from '@react-pdf/renderer';
import reactStringReplace from 'react-string-replace';
// eslint-disable-next-line no-unused-vars
import convertRGBToHex from './CollorParser';
import styles from './Styles';

export interface IConvertedHtml {
  Type: string;
  Value: string;
  Nodes: IConvertedHtml[];
}

const App = (): React.ReactElement => {
  const htmlString: string = '<p>O Profile4d – DNA Comportamental, considera as quatro dimensões do ser:<strong><span style="color: rgb(153, 138, 0);"> física</span></strong>, <strong><span style="color: rgb(152, 0, 0);">emocional</span></strong>,<strong><span style="color: rgb(0, 51, 153);"> intelectual</span></strong> e <strong><span style="color: rgb(153, 0, 133);">espiritual.</span></strong> Foi desenvolvido por Carlos de Souza, especialista comportamental e autor do livro “Você em Dezoito Versões”.</p><p>É um processo auto avaliativo sobre inteligência comportamental, que coleta informações, cruza dados e, ao final, produz relatórios completos, com emissão de gráficos e estatísticas que oferecem maior precisão aos processos de avaliação pessoal e profissional.</p><p>As seis fontes de inspiração utilizadas na metodologia:<br></p><p>Psicologia Corporal (Wilhelm Reich), Psicologia Analítica (Carl Gustav Jung), Eneagrama (George Gurdjieff e Cláudio Naranjo), Neurociência (Paul MacLean), Psicologia Positiva (Barbara Fredrickson), Programação Neurolinguística (Richard Bandler e John Grinder).</p><p>As informações desse relatório podem contribuir para o sucesso de processos de contratação ou promoção, desenvolvimento de competências (as <em>Soft Skills</em>), formação de equipes ou identificação de lideranças, <em>coaching</em> e <em>mentoring</em>.</p><p><span style="color: rgb(53, 53, 53); letter-spacing: 0.01071em;"><br></span></p><p><span style="color: rgb(53, 53, 53); letter-spacing: 0.01071em;">Este relatório tem validade por 6 meses.</span></p>';

  const stringToHtml = (str): Document => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    return doc;
  };

  const [paragraphs, setParagraphs] = useState<HTMLParagraphElement[]>([]);

  useEffect((): void => {
    const doc = stringToHtml(htmlString);
    const ps = doc.querySelectorAll('p') || [];

    const brs = doc.getElementsByTagName('br');
    while (brs.length) {
      brs[0].parentNode?.removeChild(brs[0]);
    }

    const cleanParagraphList: HTMLParagraphElement[] = [];

    ps.forEach((p): void => {
      if (p.innerText !== '') {
        cleanParagraphList.push(p);
      }
    });

    setParagraphs(cleanParagraphList);
  }, []);

  const formatNode = (node: React.CElement<ReactPDF.TextProps, ReactPDF.Text>): React.CElement<ReactPDF.TextProps, ReactPDF.Text> => {
    let CompFormated: any = React.cloneElement(node, node.props, node.props.children);

    CompFormated = React.cloneElement(node, node.props, reactStringReplace(node.props.children?.toString(), /<strong>(.*?)<\/strong>/gs, (match, ind): React.ReactNode => (
      <Text key={ind} style={styles.bold}>{match}</Text>
    )));

    // set italic Text
    // eslint-disable-next-line array-callback-return
    CompFormated.props.children.map((c, index): void => {
      if (typeof c === 'string') {
        CompFormated.props.children[index] = reactStringReplace(c, /<em>(.*?)<\/em>/gs, (match, ind): React.ReactNode => (
          <Text key={ind} style={styles.italic}>{match}</Text>
        ));
      }
    });

    // set color (span)
    // eslint-disable-next-line array-callback-return
    CompFormated.props.children.map((c, outIndex): void => {
      if (Array.isArray(c)) {
        // eslint-disable-next-line array-callback-return
        c.map((inner, innerIndex): void => {
          if (typeof inner === 'string') {
            CompFormated.props.children[outIndex][innerIndex] = reactStringReplace(c[innerIndex], /(<span.*>.*?<\/span>)/gs, (match, ind): React.ReactNode => {
              const doc = stringToHtml(match);
              const spanNode = doc.body.childNodes[0] as HTMLSpanElement;
              return (
                <Text key={ind} style={[styles.text, styles.bold, { color: convertRGBToHex(spanNode.style.color) }]}>{spanNode.innerText}</Text>
              );
            });
          }
        });
      }
    });

    // eslint-disable-next-line array-callback-return
    CompFormated.props.children.map((c, i): void => {
      if (c.$$typeof) {
        CompFormated.props.children[i] = formatNode(c);
      }
    });

    return CompFormated;
  };

  return (
    <PDFViewer
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        flex: 1,
        border: 0,
      }}
    >
      <Document>
        <Page size="A4" style={styles.page}>
          {
            paragraphs.map((p, i): React.ReactNode => {
              if (p.childElementCount === 0) {
                return (
                  <View key={i} style={styles.textWrapper}>
                    <Text style={styles.text}>
                      {p.textContent}
                    </Text>
                  </View>
                );
                // eslint-disable-next-line no-else-return
              } else {
                const Comp = React.createElement(Text, { debug: false, style: styles.text }, stringToHtml(p.innerHTML).body.innerHTML);
                let CompFormated;

                if (Comp.props.children) {
                  CompFormated = formatNode(Comp);

                  return (
                    <View key={i} style={styles.textWrapper}>
                      { CompFormated }
                    </View>
                  );
                // eslint-disable-next-line no-else-return
                } else {
                  return (
                    <View key={i} style={styles.textWrapper}>
                      { Comp }
                    </View>
                  );
                }
              }
            })
          }
        </Page>
      </Document>
    </PDFViewer>
  );
};

storiesOf('HtmlHandlerReact', module)
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactElement => (
    <App />
  ));
