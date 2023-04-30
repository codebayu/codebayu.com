import { theme } from '@chakra-ui/react'

export const defaultTheme = {
  ...theme,
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
  }
}
