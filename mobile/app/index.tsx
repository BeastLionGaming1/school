import { Text, View } from "react-native";
import Icon from "@/components/Icon.tsx";
import Post from "@/components/Post.tsx";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Post />
    </View>
  );
}
