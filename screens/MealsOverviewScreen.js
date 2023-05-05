import { StyleSheet, Text, View } from 'react-native';

function MealsOverviewScreen() {
  return (
    <View styles={styles.container}>
      <Text>MealsOverviewScreen</Text>
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
