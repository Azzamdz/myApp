import { ImageSourcePropType } from "react-native";

export const notes: Note[] = [
  {
    id: 1,
    title: "Belajar Membuat Aplikasi Mobile",
    description:
      "Mempelajari dasar-dasar membuat aplikasi mobile menggunakan React Native.",
    date: "29 Oktober 2025",
    image: require("@/assets/images/programing 0.png"),
  },
  {
    id: 2,
    title: "Mengenal Komponen Expo",
    description:
      "Belajar menggunakan komponen dasar Expo seperti Image, Text, dan View.",
    date: "23 Oktober 2025",
    image: require("@/assets/images/programing 1.png"),
  },
  {
    id: 3,
    title: "State & Props di React Native",
    description:
      "Memahami perbedaan antara state dan props dalam membangun UI.",
    date: "23 Oktober 2025",
    image: require("@/assets/images/programing 2.png"),
  },
  {
    id: 4,
    title: "Membuat UI Modern",
    description:
      "Belajar membuat UI modern dengan styling menggunakan StyleSheet.",
    date: "23 Oktober 2025",
    image: require("@/assets/images/programing 3.png"),
  },
  {
    id: 5,
    title: "Belajar Navigasi",
    description:
      "Mempelajari cara menggunakan React Navigation untuk berpindah halaman.",
    date: "23 Oktober 2025",
    image: require("@/assets/images/programing 3.png"),
  },
  {
    id: 6,
    title: "Koneksi API di React Native",
    description: "Mencoba mengambil data dari API menggunakan fetch dan axios.",
    date: "23 Oktober 2025",
    image: require("@/assets/images/programing 3.png"),
  },
  {
    id: 7,
    title: "Membuat Aplikasi Catatan",
    description:
      "Membangun aplikasi note sederhana dengan fitur add dan delete.",
    date: "23 Oktober 2025",
    image: require("@/assets/images/programing 3.png"),
  },
];

type Note = {
  id: number;
  title: string;
  description: string;
  date: string;
  image: ImageSourcePropType | { uri: string };
};
