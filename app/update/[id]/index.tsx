import { notes } from "@/data/noteData";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const images = [
  require("@/assets/images/programing 0.png"),
  require("@/assets/images/programing 1.png"),
  require("@/assets/images/programing 2.png"),
  require("@/assets/images/programing 3.png"),
];

export default function UpdateScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const [title, setTitle] = useState("");
  const note = notes.find((note) => note.id === Number(id));
  const [description, setDescription] = useState("");

  const [selectedImage, setSelectedImage] = useState<number>(0);

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.description);

      const imageIndex = images.findIndex((img) => img === note.image);
      setSelectedImage(imageIndex);
    }
  }, [note]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#FF5B13" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Update Note</Text>
      </View>

      <ScrollView style={styles.form}>
        <TextInput
          style={styles.inputTitle}
          placeholder="Note Title"
          selectionColor="#FF5B13"
          value={title}
        />
        <TextInput
          style={styles.inputContent}
          placeholder="Note Content"
          selectionColor="#FF5B13"
          textAlignVertical="top"
          multiline={true}
          value={description}
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {images.map((img, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.boxImage,
                selectedImage === index && styles.imageSelected,
              ]}
              onPress={() => setSelectedImage(index)}
            >
              <Image style={styles.image} source={img} />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Update</Text>
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
  form: {
    flex: 1,
    padding: 10,
  },
  inputTitle: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    padding: 15,
    marginBottom: 10,
  },
  inputContent: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#ccc",
    padding: 15,
    height: 150,
    marginBottom: 10,
  },
  boxImage: {
    height: 100,
    width: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 12,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
  imageSelected: {
    borderColor: "#FF5B13",
  },
  bottomContainer: {
    padding: 16,
    borderTopWidth: 0.3,
    borderTopColor: "#eee",
  },
  addButton: {
    backgroundColor: "#FF5B13",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
