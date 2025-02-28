import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { useSelector } from 'react-redux';
import ArticleModle from '../model/ArticlModel';

const DisplayArticle = () => {
  const articles: ArticleModle[] = useSelector((state: any) => state.read);

  return (
    <LinearGradient colors={["#1E1E1E", "#292929"]} style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollView}>
        {articles.map((item: ArticleModle, index: number) => {
         
          if (articles.length === index + 1) {
            return (
              <View key={index} style={styles.articleContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.content}>{item.content}</Text>
              </View>
            );
          }
          return null; 
        })}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#292929"
  },
  scrollView: {
    backgroundColor: '#292929',
    marginHorizontal: 20,
  },
  articleContainer: {
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ce3248",
    textAlign: "center",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: "#ffffff",
    lineHeight: 24,
    margin: 10,
    textAlign: "justify",
  },
});

export default DisplayArticle;
