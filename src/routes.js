// container de navegação de toda aplicação, onde ficaraão as navegaçõess
import { createAppContainer } from 'react-navigation';

// navageção por stack (existem outros tipos de navegação)
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Routes = createAppContainer(
  // navegações sempre ficam dentro do createAppContainer
  createStackNavigator(
    {
      // Main vai aparecer na tela primeiro, pois é  a primeira propriedade
      Main,
      User,
      Repository,
    },
    {
      // configurações da navegação para todas as telas
      defaultNavigationOptions: {
        headerTitleAlign: 'center',
        // no IOS, remover texto na opção de voltar
        headerBackTitleVisible: false,
        // estilos para o header
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        // cor dos elementos do header
        headerTintColor: '#FFF',
      },
    }
  )
);

export default Routes;
