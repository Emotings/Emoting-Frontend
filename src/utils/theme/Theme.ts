import { DefaultTheme } from 'styled-components';

const colors = {
  Main50: '#FFE5EF',
  Main100: '#FFD1E2',
  Main200: '#FFA3C5',
  Main300: '#FF75A8',
  Main400: '#FF478B',
  Main500: '#FF1A6E',
  Main600: '#EB0056',
  Main700: '#BD0045',
  Main800: '#8F0034',
  Main900: '#610024',
  GrayScale50: '#F2F2F2',
  GrayScale100: '#E8E8E8',
  GrayScale200: '#D1D1D1',
  GrayScale300: '#BABABA',
  GrayScale400: '#A3A3A3',
  GrayScale500: '#8C8C8C',
  GrayScale600: '#757575',
  GrayScale700: '#5E5E5E',
  GrayScale800: '#474747',
  GrayScale900: '#303030',
  black: '#000000',
  Error500: '#DD3C41',
  Error600: '#C72329',
  Error700: '#A01C21',
  Error800: '#791519',
  Error900: '#520F11',
  White: '#FFFFFF',
  Gray: '#757575',
};

const fonts = {
  TitleLg: `400 3rem 'Pretendard'`,
  TitleMd: `500 2.25rem 'Pretendard'`,
  TitleSm: `600 1.5rem 'Pretendard'`,
  TextLg: `400 1.125rem 'Pretendard'`,
  TextMd: `500 1rem 'Pretendard'`,
  TextSm14: `600 0.875rem 'Pretendard'`,
  TextSm18: `600 1.125rem 'Pretendard'`,
  Caption: `300 0.75rem 'Pretendard'`,
  CapLg: `400 0.75rem 'Pretendard'`,
};

export type ColorsTypes = typeof colors;
export type FontTypes = typeof fonts;

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
