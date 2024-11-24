import { extendTheme } from '@chakra-ui/react';
import styles from './styles';

const colors = {
  color: {
    teal: "#017E7E",
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  colors,
  styles,
  config,
});

export default theme;
