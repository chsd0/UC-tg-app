// import "./index.scss";
// import { App } from "./app.jsx";
// import { createRoot } from "react-dom/client";
// import React from "react";

// const container = document.querySelector('.root');
// const root = createRoot(container);
// root.render(<App/>);

import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import {App} from './app.jsx'


import { init, miniApp } from '@telegram-apps/sdk';


const initializeTelegramSDK = async () => {
  try {
    await init();


    if (miniApp.ready.isAvailable()) {
      await miniApp.ready();
      console.log('Mini App готово');
    }


  } catch (error) {
    console.error('Ошибка инициализации:', error);
  }
};


initializeTelegramSDK();


createRoot(document.querySelector('.root')).render(
  <>
    <App />
  </>,
)