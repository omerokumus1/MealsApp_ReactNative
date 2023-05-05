import { Pressable, Text, View } from 'react-native';

function CategoryGridTile({ model }) {
  return (
    <View>
      <Pressable>
        <View>
          <Text>{model.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;
