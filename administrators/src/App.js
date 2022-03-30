import { QueryClient, QueryClientProvider } from 'react-query';
// routes
import Router from './routes';
// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';

// ----------------------------------------------------------------------
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      cacheTime: 0
    }
  }
});

export default function App() {
  return (
    <ThemeConfig>
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <GlobalStyles />
        <BaseOptionChartStyle />
        <Router />
      </QueryClientProvider>
    </ThemeConfig>
  );
}
