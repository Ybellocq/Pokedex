import { Text, View, StyleSheet } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link href="/about">A propos</Link>
      <Link href={{pathname: '/pokemon/[id]', params: {id: 3}}}>Pokemon 3</Link>
    </View>
  );
}

const styles = {
  container: {
    backgroundColor: "#FF0000",
    padding: 24,
  },
};
