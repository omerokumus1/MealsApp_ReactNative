import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

import { CATEGORIES } from '../data/dummy-data';

function CategoriesScreen({ navigation }) {
  function renderItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverviewScreen');
    }
    return (
      <CategoryGridTile
        model={itemData.item}
        onPress={pressHandler.bind(null)}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
