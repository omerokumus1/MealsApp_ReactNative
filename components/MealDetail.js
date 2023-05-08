import { StyleSheet, View, Text } from 'react-native';

function MealDetail({ duration, complexity, affordability, style, textStyle }) {
  const detailItemStyle = [styles.detailsItem, textStyle];
  return (
    <View style={[styles.details, style]}>
      <Text style={detailItemStyle}>{duration}m</Text>
      <Text style={detailItemStyle}>{complexity.toUpperCase()}</Text>
      <Text style={detailItemStyle}>{affordability.toUpperCase()}</Text>
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
