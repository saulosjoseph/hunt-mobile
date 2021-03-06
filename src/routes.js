import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/main';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Main} />
    </Stack.Navigator>
  );
};

export default Routes;
