const theme = {
  colors: {
    primary: '#495E57',
    secondary: '#F4CE14',
    tertiary: '#EE9972',
    quaternary: '#FBDABB',
    white: '#FFFFFF',
    black: '#000000',
    highlight_light: '#EDEFEE',
    highlight_dark: '#333333',
  },
  border: {
    radius: '1.6rem',
  },
  font: {
    family: {
      primary: "'Markazi Text', serif",
      secondary: "'Karla', sans-serif",
    },
    size: {
      small: '1.6rem',
      medium: '2.0rem',
      large: '2.4rem',
      xlarge: '4.0rem',
      xxlarge: '5.2rem',
      huge: '6.4rem',
    },
    weight: {
      regular: 400,
      medium: 500,
      bold: 700,
      extrabold: 800,
    },
  },
};

export default theme;
export type ThemeType = typeof theme;