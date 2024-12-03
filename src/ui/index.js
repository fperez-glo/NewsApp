import './locale/i18n';
import { registerRootComponent } from 'expo';
import { ExpoRoot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DIProvider } from './context/DIProvider';
import { container } from '../config/di';
import { QueryClientProvider, QueryClient } from 'react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import TranslationListener from './locale/TranslationListener';

export const queryClient = new QueryClient();
const Main = () => {
  const ctx = require.context('./app');
  return (
    <DIProvider container={container}>
      <TranslationListener />
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <SafeAreaView style={{ flex: 1 }}>
            <ExpoRoot context={ctx} />
          </SafeAreaView>
        </GestureHandlerRootView>
      </QueryClientProvider>
    </DIProvider>
  );
};

export default registerRootComponent(Main);
