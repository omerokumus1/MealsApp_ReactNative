import { useContext, useLayoutEffect } from 'react';
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetail from '../components/MealDetail';
import Subtitle from '../components/MetalDetail/Subtitle';
import List from '../components/MetalDetail/List';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';

function MealDetailScreen({ route, navigation }) {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const isFavoriteMeal = favoriteMealsCtx.ids.includes(route.params.id);
  const meal = MEALS.find((meal) => meal.id === route.params.id);
  const { duration, complexity, affordability } = meal;

  function toggleFavoriteHandler() {
    if (isFavoriteMeal) {
      favoriteMealsCtx.removeFavorite(route.params.id);
    } else {
      favoriteMealsCtx.addFavorite(route.params.id);
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => {
        return (
          <IconButton
            onPress={toggleFavoriteHandler}
            icon={isFavoriteMeal ? 'star' : 'star-outline'}
            color="white"
          />
        );
      },
    });
  }, [navigation, toggleFavoriteHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: meal.imageUrl }} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetail
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listsOuterContainer}>
        <View style={styles.listsContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: { marginBottom: 32 },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    margin: 8,
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listsOuterContainer: {
    alignItems: 'center',
  },
  listsContainer: {
    width: '80%',
  },
});
