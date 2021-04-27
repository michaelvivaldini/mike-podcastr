import React, { useState } from 'react';
import { Header } from '../components/Header/Header';
import { Player } from '../components/Player/Player';
import styles from '../styles/app.module.scss';
import Head from 'next/head'
import { PlayerContextProvider } from '../contexts/PlayerContext';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  )
}

export default MyApp
