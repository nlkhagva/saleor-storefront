import '../globalStyles/scss/index.scss';

import React from 'react';

import {
    Footer, FooterMainMenu, MainMenu, MetaConsumer, OverlayManager, Topbar
} from '../components';
import { Routes } from './routes';

const App: React.FC = () => {

  return (
    <>
      <MetaConsumer />
      <header>
        <Topbar />
        <MainMenu />
      </header>
      <Routes />

      <FooterMainMenu />
      <Footer />
      <OverlayManager />
    </>
  );
};

export default App;
