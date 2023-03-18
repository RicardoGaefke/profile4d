/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import convertRGBToHex from './CollorParser';

export interface IConvertedHtml {
  Type: string;
  Value: string;
  Nodes: IConvertedHtml[];
}

const App = (): React.ReactElement => {
  // eslint-disable-next-line max-len
  const htmlString: string = '<p>p1</p><p>p2 <strong>strong 1</strong> and <strong>strong 2</strong> <span>sem cor</span> <span style="color: rgb(0, 51, 153);"> intelectual</span> <em>italic</em> <strong><em>bolditalic</em></strong></p><p>p3</p>';

  const stringToHtml = (str): Document => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    return doc;
  };

  const [paragraphs, setParagraphs] = useState<HTMLParagraphElement[]>([]);

  useEffect((): void => {
    const doc = stringToHtml(htmlString);
    const ps = doc.querySelectorAll('p') || [];
    setParagraphs(Array.from(ps));
  }, []);

  return (
    <>
      {
        paragraphs.map((p, i): React.ReactNode => {
          if (p.childElementCount === 0) {
            return (
              <p key={i}>{p.textContent}</p>
            );
            // eslint-disable-next-line no-else-return
          } else {
            // replace strong
            const bold: HTMLElement[] = Array.from(p.querySelectorAll('strong'));

            // eslint-disable-next-line no-restricted-syntax
            for (const b of bold) {
              const newB: HTMLElement = document.createElement('i');
              newB.innerText = b.innerText;
              p.replaceChild(newB, b);
            }

            // replace em
            const italic: HTMLElement[] = Array.from(p.querySelectorAll('em'));

            // eslint-disable-next-line no-restricted-syntax
            for (const ita of italic) {
              const newIta: HTMLElement = document.createElement('b');
              newIta.innerText = ita.innerText;
              p.replaceChild(newIta, ita);
            }

            // replace span
            const span: HTMLElement[] = Array.from(p.querySelectorAll('span'));

            // eslint-disable-next-line no-restricted-syntax
            for (const s of span) {
              const newS: HTMLElement = document.createElement('div');
              newS.innerText = s.innerText;
              newS.style.color = convertRGBToHex(s.style.color);
              p.replaceChild(newS, s);
            }

            return (
              <p key={i}>{p.innerHTML}</p>
            );
          }
        })
      }
    </>
  );
};

storiesOf('HtmlHandler', module)
  .addDecorator((storyFn, context): React.ReactElement => withConsole()(storyFn)(context))
  .add('Basic', (): React.ReactElement => (
    <App />
  ));
