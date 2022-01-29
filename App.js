import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PeoplePage from "./src/pages/PeoplePages";
import PeopleDatailPage from "./src/pages/PeopleDatailPage";

const AppkNavigator = createStackNavigator({
  //ESSA ORDEM ABAIXO É A ORDEM QUE VAI SER EXECUTADO O APP, ENTÃO IMPORTA!!!
  Main: {
    screen: PeoplePage
  },
  PeopleDetail: {
    screen: PeopleDatailPage,
    navigationOptions: ({ navigation }) => {
      const peopleName = [navigation.state.params.people.name.first, " ", navigation.state.params.people.name.last]
      return ({
        title: peopleName,
        headerTitleStyle: {
          color: 'white',
          fontSize: 30,
          flexGrow: 1
        }
      })
    }
  }
}, {
  defaultNavigationOptions: {
    title: 'Contatos',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'black',
      borderBottomWidth: 1,
      borderBottomColor: 'silver'
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,

      flexGrow: 1,
      textAlign: 'left'
    }
  }
});

const AppContainer = createAppContainer(AppkNavigator);

export default AppContainer;