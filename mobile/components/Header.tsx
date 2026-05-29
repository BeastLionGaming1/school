import { View, Text, Image, TextInput } from "react-native";
import styles from "@/styles/Header.tsx";

function Header() {
  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Search..."
        keyboardType="default"
      />
      <View style={styles.not}>
        <Image
      </View>
    </View>
  )
}

export default Header;