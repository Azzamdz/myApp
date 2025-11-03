import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const notes: Note[] = [
  {
    id: 1,
    title: "Belajar membuat aplikasi mobile",
    desc: "Belajar membuat aplikasi mobile",
    date: " 29 oktober 2025",
    image: require("@/assets/images/programing 0.png"),
  },
  {
    id: 2,
    title: "Belajar membuat aplikasi mobile",
    desc: "Belajar membuat aplikasi mobile",
    date: " 23 oktober 2025",
    image: require("@/assets/images/programing 1.png"),
  },
  {
    id: 3,
    title: "Belajar membuat aplikasi mobile",
    desc: "Belajar membuat aplikasi mobile",
    date: " 23 oktober 2025",
    image: require("@/assets/images/programing 2.png"),
  },
  {
    id: 4,
    title: "Belajar membuat aplikasi mobile",
    desc: "Belajar membuat aplikasi mobile",
    date: " 23 oktober 2025",
    image: require("@/assets/images/programing 3.png"),
  },
  {
    id: 5,
    title: "Belajar membuat aplikasi mobile",
    desc: "Belajar membuat aplikasi mobile",
    date: " 23 oktober 2025",
    image: require("@/assets/images/programing 3.png"),
  },
  {
    id: 6,
    title: "Belajar membuat aplikasi mobile",
    desc: "Belajar membuat aplikasi mobile",
    date: " 23 oktober 2025",
    image: require("@/assets/images/programing 3.png"),
  },
  {
    id: 7,
    title: "Belajar membuat aplikasi mobile",
    desc: "Belajar membuat aplikasi mobile",
    date: " 23 oktober 2025",
    image: require("@/assets/images/programing 3.png"),
  },
];

type Note = {
  id: number;
  title: string;
  desc: string;
  date: string;
  image: ImageSourcePropType | { uri: string };
};

const NoteItem = ({ item }: { item: Note }) => {
  return (
    <View style={styles.card}>
      <Image style={{ width: 80, height: 80 }} source={item.image} />
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDesc}>{item.desc}</Text>
        <Text style={styles.cardDate}>{item.date}</Text>
      </View>
    </View>
  );
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={{ width: 32, height: 32 }}
          source={require("@/assets/images/logo.png")}
        />
        <Text style={styles.kodeinText}>Kodein</Text>
        <Text style={styles.notesText}>Notes</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={notes}
          renderItem={({ item }) => <NoteItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ gap: 16, flexGrow: 1 }}
          ListEmptyComponent={() => <EmptyData />}
        />
      </View>

      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const EmptyData = () => {
  return (
    <View style={styles.emptyContainer}>
      <Image
        style={{ width: 150, height: 150 }}
        source={require("@/assets/images/empty.png")}
      />
      <Text style={styles.emptyTitle}>Add your first note</Text>
      <Text style={styles.emptyDesc}>
        Save your thoughts, tasks or inspirations
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  kodeinText: {
    fontSize: 20,
    fontWeight: "700",
  },
  notesText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FF5B13",
  },
  content: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  card: {
    elevation: 1,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e6e6e6",
    backgroundColor: "#fff",
  },
  cardContainer: {
    flex: 1,
    padding: 8,
    gap: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#222",
  },
  cardDesc: {
    fontSize: 14,
    color: "#555",
  },
  cardDate: {
    fontSize: 12,
    color: "#999",
  },
  fab: {
    position: "absolute",
    bottom: 35,
    right: 20,
    backgroundColor: "#ff5813",
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  emptyDesc: {
    fontSize: 16,
    color: "gray",
  },
});
