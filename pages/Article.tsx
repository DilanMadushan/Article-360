import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";


export default function Article() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);


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


  return (
    <LinearGradient colors={["#1E1E1E", "#292929"]} style={styles.container}>
      <StatusBar style="light" />


      <View style={styles.articleBox}>
        <Text style={styles.title}>Write Your Article</Text>


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




        <View style={{ width: "100%"}}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Save Article</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update Article</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Delete Article</Text>
        </TouchableOpacity>
      </View>
       
      </View>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  articleBox: {
    width: "85%",
    backgroundColor: "#1E1D1D",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffffff",
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
    height: 150,
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
    height: 150,
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
});




