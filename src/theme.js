import React from 'react'
import { theme } from '@chakra-ui/react'

export const defaultTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: '"Ubuntu Condensed", system-ui, sans-serif',
    heading: '"Ubuntu Condensed", system-ui, sans-serif',
    alt: '"SF Pro Display", "Inter", system-ui, sans-serif',
  },
  colors: {
    ...theme.colors,
    gray: {
      ...theme.colors.gray,
      100: '#E5E5E5',
      300: '#C4C4C4',
      700: '#888888',
    },
    green: {
      ...theme.colors.green,
      100: '#4ABAB4',
      200: '#4ABAB4',
      300: '#4ABAB4',
      400: '#4ABAB4',
      500: '#4ABAB4',
      600: '#4ABAB4',
      700: '#4ABAB4',
      900: '#4ABAB4',
    },
  },
  fontSizes: {
    ...theme.fontSizes,
    xl: '30px',
    '2xl': '36px',
    '4xl': '4rem',
    '3xl': '40px',
    md: '18px',
    xs: '24px',
  },
  icons: {
    ...theme.icons,
    star: {
      path: (
        <path
          d="M11.9917 2C6.47171 2 2.00171 6.48 2.00171 12C2.00171 17.52 6.47171 22 11.9917 22C17.5217 22 22.0017 17.52 22.0017 12C22.0017 6.48 17.5217 2 11.9917 2ZM16.2317 18L12.0017 15.45L7.77171 18L8.89171 13.19L5.16171 9.96L10.0817 9.54L12.0017 5L13.9217 9.53L18.8417 9.95L15.1117 13.18L16.2317 18Z"
          fill="black"
        />
      ),
      viewBox: '0 0 25 25',
    },
  },
}
