import { FlatList } from "react-native";
import { categories } from "../../mocks/categories";
import { Text } from "../Text";
import { Category, Icon } from "./styles";

export function Categories() {
  return (

    <FlatList
      horizontal
      data={categories}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={category => category._id}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item: category }) => (
        <Category key={category._id}>
          <Icon>
            <Text>{category.icon}</Text>
          </Icon>

          <Text size={14} weight="600">{category.name}</Text>
        </Category>
      )}
    />
  )
}