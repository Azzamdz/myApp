import { Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>name</Text>
      
      <TextInput placeholder="your name"
        style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
        }}></TextInput>
      <Text>class</Text>

      <TextInput placeholder="your class"
        style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
        }}></TextInput>
      <Text>hobby</Text>

      <TextInput placeholder="your hobby"
        style={{
          height: 40,
          padding: 5,
          marginHorizontal: 8,
          borderWidth: 1,
        }}></TextInput>
    </View>
  );
}
