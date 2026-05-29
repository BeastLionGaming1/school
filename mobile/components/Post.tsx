import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "./Icon.tsx";
import IconBtn from "./IconBtn.tsx";
import { styles } from "@/styles/post.tsx";

function Post() {
  const [like, setLike] = useState(false);

  function handleLike() {
    console.log(like ? "Post unliked" : "Post liked");
    setLiked((prev) => !prev);
  }
  return (
    <View>
      <View style={styles.top}>
        <View style={styles.left}>
          <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7jiUOlWSageJnEq9TEBRTcRF5tOL7Dhn5DBRdLVD5g&s=10" }}
            style={styles.user} 
            resizeMode="cover"
          />
        </View>
        <TouchableOpacity>
          <Icon icon="more" />
        </TouchableOpacity>
      </View>
      <Image 
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk7jiUOlWSageJnEq9TEBRTcRF5tOL7Dhn5DBRdLVD5g&s=10" }}
        style={{ width: "100%", height: 100 }}
        resizeMode="contain"
      />
      <View style={styles.bottom}>
        <IconBtn icon={like ? "likeFilled" : "like"} onPress={handleLike} />
        <IconBtn icon="chat" />
        <IconBtn icon="share" />
      </View>
    </View>
  )
}

export default Post;