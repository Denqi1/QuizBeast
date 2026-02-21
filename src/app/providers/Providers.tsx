import { AppRouter } from './router';
import { CustomThemeProvider } from './theme';

export const Providers = () => {
  return (
    <CustomThemeProvider>
      <AppRouter />
    </CustomThemeProvider>
  );
};
