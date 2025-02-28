import React from "react";
import { View, Text, Image, StyleSheet ,TouchableOpacity,Pressable} from "react-native";
import { router } from "expo-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { findArticle } from "../slice/ReadSlice";

interface CardProps {
    title: string;
    image: string;
    content?: string;
}

const Card = ({ title, image, content }:CardProps) => {

const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.card}>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>

      <TouchableOpacity style={styles.button}>
        <Pressable onPress={() => {
          router.push("/DisplayArticle");
          dispatch(findArticle(title));
          }} >
                <Text style={styles.buttonText}>Read More</Text>
        </Pressable>
    </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#333",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  content: {
    color: "#ccc",
    fontSize: 14,
  },
  button: {
    padding: 12,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#CE3248",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Card;