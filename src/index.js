import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';
// import arquivos após o import do reactotron, para que ele por reconhece-los
import Routes from './routes';

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
}

export default App;
