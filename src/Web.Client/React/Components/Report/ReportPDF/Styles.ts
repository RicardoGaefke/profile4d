import { StyleSheet } from '@react-pdf/renderer';

const Styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    flexGrow: 1,
  },
  imageWrapper: {
    width: '100%',
    paddingHorizontal: '20%',
    paddingVertical: 50,
  },
  image: {
    width: '100%',
  },
  titleWrapper: {
    width: '100%',
    paddingVertical: 20,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '21pt',
  },
  textWrapper: {
    width: '100%',
    paddingVertical: 5,
  },
  text: {
    textAlign: 'justify',
    fontSize: '10pt',
    fontFamily: 'Times-Roman',
  },
  bold: {
    fontFamily: 'Times-Bold',
  },
  italic: {
    fontFamily: 'Times-Italic',
  },
});

export default Styles;
