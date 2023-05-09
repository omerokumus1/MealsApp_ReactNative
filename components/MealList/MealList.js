import { StyleSheet, FlatList, View } from 'react-native';
import MealItem from './MealItem';
import { useNavigation } from '@react-navigation/native';

function MealList({ items }) {
  const navigation = useNavigation();
  function mealItemPressHandler(id) {
    navigation.navigate('MealDetailScreen', { id });
  }

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      onMealItemPress: mealItemPressHandler,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View styles={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
