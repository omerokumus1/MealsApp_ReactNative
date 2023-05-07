import { StyleSheet } from 'react-native';

function MealDetail({ duration, complexity, affordability }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailsItem}>{duration}m</Text>
      <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
      <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetail;

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
  },
});
