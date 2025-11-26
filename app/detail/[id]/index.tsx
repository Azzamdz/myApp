import { notes } from "@/data/noteData";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const note = notes.find((note) => note.id === Number(id));
  console.log(note);
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.appBar} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#FF5B13" />
        <Text style={styles.appBarTitle}>Note Details</Text>
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Image style={styles.image} source={note?.image} />

        <View style={styles.content}>
          <Text style={styles.title}>{note?.title}</Text>
          <Text style={styles.date}>{note?.date}</Text>

          <Text style={styles.description}>{note?.desc}</Text>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.updateButton}
          onPress={() => router.push(`/update/${note?.id}`)}
        >
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 56,
    borderBottomWidth: 0.2,
    borderBottomColor: "#ddd",
  },
  appBarTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  image: {
    width: "100%",
    height: 220,
    resizeMode: "contain",
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
    textAlign: "justify",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 12,
    backgroundColor: "#fff",
  },
  updateButton: {
    flex: 1,
    backgroundColor: "#FF5B13",
    marginHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "#FF3B30",
    marginHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
