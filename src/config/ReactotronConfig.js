import Reactotron from 'reactotron-react-native';
// __DEV__ variável global do react native que é true quando está em ambiente de desenvolvimento
if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  // pega o console que é uma variável globale está criando uma nova variável chamda tron em console
  // aceso ao reactotron sem precisar importar este arquivo
  console.tron = tron;

  //limpar timeline a cada refresh
  tron.clear();
}
