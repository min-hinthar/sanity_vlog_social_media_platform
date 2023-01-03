import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Server-side Rendering check
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if(isSSR) return null;

  return <Component {...pageProps} />
}

export default MyApp