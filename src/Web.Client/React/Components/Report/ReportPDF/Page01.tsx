import React from 'react';
import {
  // eslint-disable-next-line no-unused-vars
  Page, View, Text, Image,
} from '@react-pdf/renderer';
// eslint-disable-next-line no-unused-vars
import { ReportContentProps } from '../ReportContent';
import { filterStaticTitle, filterStaticText } from '../filterStatic';
import styles from './Styles';
import HtmlParser from './HtmlParser';

const Page01 = (props: ReportContentProps): JSX.Element => {
  const { data } = props;

  const Language: string = 'PT';

  const staticTitle = (contentId: number): string => filterStaticTitle(contentId, Language, data.StaticContent || []);
  const staticText = (contentId: number): string => filterStaticText(contentId, Language, data.StaticContent || []);

  return (
    <Page size="A4" style={styles.page}>
      <View style={styles.imageWrapper}>
        <Image
          source="/img/locker.jpg"
          style={styles.image}
        />
      </View>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          {staticTitle(1)}
        </Text>
      </View>

      <HtmlParser html={staticText(1)} />
    </Page>
  );
};

Page01.displayName = 'Page01';

export default Page01;
