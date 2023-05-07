import { useLayoutEffect } from 'react';
import { Text } from 'react-native';

function MealDetailScreen({ route, navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({ title: route.params.title });
  });
  return <Text>{route.params.title}</Text>;
}

export default MealDetailScreen;
