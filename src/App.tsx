import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './GlobalStyles';
import theme from './theme/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
    </ThemeProvider>
  );
};
export default App;
