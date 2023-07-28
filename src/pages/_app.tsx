
import React, {ReactElement, ReactNode} from 'react';
import type { AppProps } from 'next/app';
import type { NextPage } from 'next'
import CustomLayoutIndex from '../../layout/IndexLayout';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import 'react-toastify/dist/ReactToastify.css';   
import '../styles/globals.css';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayoutIndex?:  (page: ReactElement, additional?: any)  => ReactNode,
  getLayoutProduk?: (page: ReactElement, additional?: any)  => ReactNode;
  getLayoutAuth?:   (page: ReactElement, additional?: any)  => ReactNode;
}

type PropsComponent = AppProps & {
    Component?: NextPageWithLayout
}

export default function App({ Component, pageProps }: PropsComponent) {

  if(Component.getLayoutIndex){
     return Component.getLayoutIndex(
        <CustomLayoutIndex>
           <Component {...pageProps}/>
        </CustomLayoutIndex>
     );
  }

  if(Component.getLayoutProduk){
     return Component.getLayoutProduk(
      <Component {...pageProps}/>
     )
  }

  if(Component.getLayoutAuth){
    return Component.getLayoutAuth(
      <Component {...pageProps}/> 
    )
  }
}
