/* eslint-disable max-len */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import ReactPDF, { View, Text } from '@react-pdf/renderer';
import reactStringReplace from 'react-string-replace';
import styles from './Styles';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import convertRGBToHex from './CollorParser';

export interface ConvertHtmlToPdfProps {
  html: string;
}

const ConvertHtmlToPdf = (props: ConvertHtmlToPdfProps): JSX.Element => {
  const { html } = props;
  const stringToHtml = (str): Document => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    return doc;
  };

  const [paragraphs, setParagraphs] = useState<HTMLParagraphElement[]>([]);

  useEffect((): void => {
    const doc = stringToHtml(html);
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
    <>
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
    </>
  );
};

export default ConvertHtmlToPdf;
