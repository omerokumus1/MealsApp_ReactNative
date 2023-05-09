import { Text } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealList from '../components/MealList/MealList';
import { useContext } from 'react';
import { FavoritesContext } from '../store/context/favorites-context';

function FavoriesScreen() {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );
  return <MealList items={favoriteMeals} />;
}

export default FavoriesScreen;
