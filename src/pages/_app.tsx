import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "@/redux/store";
import {useEffect} from "react";
import {useAppSelector} from "@/hooks/hooks";
import {RootState} from "@/redux/store";

function ThemeApplier({children}: {children: React.ReactNode}) {
  const theme = useAppSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : 'light');
  }, [theme]);

  return <>{children}</>;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeApplier>
          <Component {...pageProps} />
        </ThemeApplier>
      </PersistGate>
    </Provider>
  )
}
