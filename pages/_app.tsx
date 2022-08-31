import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ThemeProvider} from "../contexts/theme-context";
import {PublicLayout} from "../components/layout/public-layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (

      <ThemeProvider>
        <PublicLayout>
          <Component {...pageProps} />
        </PublicLayout>
      </ThemeProvider>

  )
}

export default MyApp
