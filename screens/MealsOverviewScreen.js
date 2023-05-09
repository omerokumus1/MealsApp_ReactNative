import MealList from '../components/MealList/MealList';
import { MEALS, CATEGORIES } from '../data/dummy-data';

import { useLayoutEffect } from 'react';

function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const displayedMeals = MEALS.filter(
    (m) => m.categoryIds.indexOf(categoryId) >= 0
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [categoryId, navigation]);

  return <MealList items={displayedMeals} />;
}

export default MealsOverviewScreen;
