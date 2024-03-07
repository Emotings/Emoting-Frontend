import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme/Theme';
import GlobalStyle from './style/GlobalStyle';
import Router from './Router';
import Login from './components/login';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router />
        <GlobalStyle />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;