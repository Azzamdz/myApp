import { Text, TextInput, View } from "react-native";

export default function Latihan1() {
  return (
    <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#0179e1ff",
            padding: 20,
          }}
        >
          <Text style={{fontSize:25, fontWeight: "bold", marginBottom: 10   }}>My Name Azzam</Text>

          <View style={{width: "100%",paddingHorizontal: 20,backgroundColor: "#ffffff", borderRadius: 10, paddingVertical: 20}}>
            <Text style={{fontSize:17, fontWeight: "bold", marginBottom: 7 }}>name</Text>
          
          <TextInput placeholder="your name"
            style={{
              borderRadius: 10,
              padding: 15,
                marginVertical: 10,
              borderWidth: 1,
            }}></TextInput>
          <Text style={{fontSize:17, fontWeight: "bold", marginBottom: 7 }}>class</Text>
    
          <TextInput placeholder="your class"
            style={{
              borderRadius: 10,
              padding: 15,
            marginVertical: 10,
              borderWidth: 1,
            }}></TextInput>
          <Text style={{fontSize:17, fontWeight: "bold", marginBottom: 7 }}>hobby</Text>
    
          <TextInput placeholder="your hobby"
            style={{
              borderRadius: 10,
              padding: 15,
                marginVertical: 10, 
              borderWidth: 1,
            }}></TextInput>
          </View>
          
        </View>
  )
}