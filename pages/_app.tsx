import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import lolServices from 'services/lol';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    /*const test = async () => {
      const champ = 'Aatrox';
      const res = await lolServices.getChampionInfos(champ);
      console.log(res.data.data[champ]);
    };
    test();*/
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
