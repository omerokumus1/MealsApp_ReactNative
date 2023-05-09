import { StyleSheet, View, Text } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList/MealList';
import { useContext } from 'react';
import { FavoritesContext } from '../store/context/favorites-context';

function FavoriesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meal yet.</Text>
      </View>
    );
  }

  return <MealList items={favoriteMeals} />;
}

export default FavoriesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
