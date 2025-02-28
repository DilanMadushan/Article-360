import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import ArticleModle from "../../model/ArticlModel";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { deleteArticleState, saveArticleState, updateArticleState } from "../../slice/ArticleSlice";


const encodeImageFileAsURL = async (uri) => {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  } catch (error) {
    console.error("Error encoding image:", error);
    return "";
  }
};

export default function ArticleCreate() {
  const [article, setArticle] = useState<ArticleModle[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const articles = useSelector((state) => state.article);

  const dispatch = useDispatch<AppDispatch>();


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const addArticle = async () => {
    try {
      if (!image) {
        console.error("No image selected!");
        return;
      }
      if(!title){
        console.error("No title selected!");
        return;
      }
      if(!content){
        console.error("No content selected!");
        return;
      }

      const base64Image = await encodeImageFileAsURL(image);

      dispatch(saveArticleState(new ArticleModle(title, base64Image, content)));
      setTitle("");
      setContent("");
      setImage(null);
    } catch (error) {
      console.error("Error adding article:", error);
    }
  };


  const updateArticle = async () => {
    try {
      if (!image) {
        console.error("No image selected!");
        return;
      }
      if(!title){
        console.error("No title selected!");
        return;
      }
      if(!content){
        console.error("No content selected!");
        return;
      }

      const base64Image = await encodeImageFileAsURL(image);

      dispatch(updateArticleState(new ArticleModle(title, base64Image, content)));
      setTitle("");
      setContent("");
      setImage(null);
    }
    catch (error) {
      console.error("Error updating article:", error);
    }
  };

  const deleteArticle = async () => {
    try {
      if(!title){
        console.error("No title selected!");
        return;
      }
      dispatch(deleteArticleState(title));
      setTitle("");
      setContent("");
      setImage(null);

    }catch (error) {
      console.error("Error deleting article:", error);
    }
  };

  return (

    <LinearGradient colors={["#1E1E1E", "#292929"]} style={styles.container}>
      <StatusBar style="light" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.articleBox}>
          <View style={styles.inputContainer}>
            <Ionicons name="document-text-outline" size={20} color="#888" />
            <TextInput
              style={styles.input}
              placeholder="Article Title"
              placeholderTextColor="#888"
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
            {image ? (
              <Image source={{ uri: image }} style={styles.image} />
            ) : (
              <Text style={styles.imagePickerText}>Pick an Image</Text>
            )}
          </TouchableOpacity>

          <TextInput
            style={styles.contentInput}
            placeholder="Write your article here..."
            placeholderTextColor="#888"
            value={content}
            onChangeText={setContent}
            multiline
          />

          <View style={{ width: "100%" }}>
            <TouchableOpacity style={styles.button} onPress={addArticle}>
              <Text style={styles.buttonText}>Save Article</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={updateArticle}>
              <Text style={styles.buttonText}>Update Article</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={deleteArticle}>
              <Text style={styles.buttonText}>Delete Article</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  articleBox: {
    width: "100%",
    backgroundColor: "#1E1D1D",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
  imagePicker: {
    backgroundColor: "#333",
    width: "100%",
    height: 180,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 15,
  },
  imagePickerText: {
    color: "#fff",
    fontSize: 16,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  contentInput: {
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 10,
    width: "100%",
    height: 250,
    textAlignVertical: "top",
    fontSize: 16,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#CE3248",
    padding: 12,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollView: {
    backgroundColor: "#292929",
    marginHorizontal: 20,
    width: "100%",
  },
});
