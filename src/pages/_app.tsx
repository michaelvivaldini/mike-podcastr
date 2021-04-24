import React, { useState } from 'react';
import { Header } from '../components/Header/Header';
import { Player } from '../components/Player/Player';
import styles from '../styles/app.module.scss';
import Head from 'next/head'
import { PlayerContext } from '../contexts/PlayerContext';
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  const [episodeList, setEpisodeList] = useState([])
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying)
  }

  function setPlayingState(play: boolean) {
    setIsPlaying(play)
  }

  return (
    <PlayerContext.Provider value={{ episodeList, currentEpisodeIndex, isPlaying, play, togglePlay, setPlayingState }}>
      <div className={styles.wrapper}>
        <Head>
          <title>Podcastr</title>
        </Head>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  )
}

export default MyApp
