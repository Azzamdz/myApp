import { Button, Text, TouchableOpacity, View, } from "react-native";

export default function Latihan4() {
    return (
        <View> 
            <Text>Latihan 4</Text>
            <Button title="Press Me" onPress={() => alert("hello")} />
                <TouchableOpacity 
                style={{
                    backgroundColor: "blueviolet",
                    margin: 20,
                    padding: 10,
                    alignItems: "center",
                    borderRadius: 10,}}>
                        <Text
                        style={{
                            color: "white",
                            fontSize: 16,
                            fontWeight: "bold",
                        }}>Press Here</Text>
                    </TouchableOpacity>
        </View>
    );
}   