import { Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
        <View style={styles.card}>
          <Image
            style={{ width: 80, height: 80 }}
            source={require("@/assets/images/programing 1.png")}
          />

          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>Ide Konten</Text>
            <Text style={styles.cardDesc}>
              Tips belajar React untuk pemula.
            </Text>
            <Text style={styles.cardDate}>Selasa, 13 Mei 2025</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={{ width: 80, height: 80 }}
            source={require("@/assets/images/programing 2.png")}
          />

          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>Ide Konten</Text>
            <Text style={styles.cardDesc}>
              Tips belajar React untuk pemula.
            </Text>
            <Text style={styles.cardDate}>Selasa, 13 Mei 2025</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={{ width: 80, height: 80 }}
            source={require("@/assets/images/programing 3.png")}
          />

          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>Ide Konten</Text>
            <Text style={styles.cardDesc}>
              Tips belajar React untuk pemula.
            </Text>
            <Text style={styles.cardDate}>Selasa, 13 Mei 2025</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            style={{ width: 80, height: 80 }}
            source={require("@/assets/images/programing 4.png")}
          />

          <View style={styles.cardContainer}>
            <Text style={styles.cardTitle}>Ide Konten</Text>
            <Text style={styles.cardDesc}>
              Tips belajar React untuk pemula.
            </Text>
            <Text style={styles.cardDate}>Selasa, 13 Mei 2025</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={32} color="white" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

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
    backgroundColor: "white",
    borderRadius: 8,
    elevation: 2,
    padding: 16,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e6e6e6",
  },
  cardContainer: {
    flex: 1,
    paddingLeft: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: "#222",
  },
  cardDesc: {
    fontSize: 14,
    fontWeight: "400",
    color: "#555",
    marginBottom: 4,
  },
  cardDate: {
    fontSize: 12,
    fontWeight: "400",
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
});
