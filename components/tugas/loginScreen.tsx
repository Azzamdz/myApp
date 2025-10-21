import { Button, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f4f4f4", 
      }}
    >
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Login
      </Text>

      <View
        style={{
          width: "80%",
          backgroundColor: "#ffffff",
          borderRadius: 12,
          padding: 20,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 3,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: "500",
            marginBottom: 7,
          }}
        >
          Email:
        </Text>
        <TextInput
          placeholder="Masukkan Email"
          style={{
            color: "#aaaaaacc",
            borderRadius: 10,
            padding: 15,
            marginVertical: 10,
            borderWidth: 1,
            borderColor: "#ccc",
          }}
        />


        <Text
          style={{
            fontSize: 17,
            fontWeight: "500",
            marginBottom: 7,
          }}
        >
          Password:
        </Text>
        <TextInput
          placeholder="Masukkan Password"
          style={{
            color: "#bdbcbccc",
            borderRadius: 10,
            padding: 15,
            marginVertical: 10,
            borderWidth: 1,
            borderColor: "#ccc",
          }}
        />

        <Button title="Login" onPress={() => alert("Login pressed!")} />
      </View>
    </View>
  );
}
