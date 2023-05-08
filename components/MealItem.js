import {
  Image,
  Text,
  View,
  Pressable,
  StyleSheet,
  Platform,
} from 'react-native';
import MealDetail from './MealDetail';

function MealItem({
  id,
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onMealItemPress,
}) {
  const mealDetailProps = { duration, complexity, affordability };
  return (
    <View style={styles.mealItem}>
      <Pressable
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        android_ripple={{ color: '#ccc' }}
        onPress={() => {
          onMealItemPress(id);
        }}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetail {...mealDetailProps} />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    backgroundColor: 'white',
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.45,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: 'center',
    margin: 8,
  },

  buttonPressed: { opacity: 0.5 },
});
