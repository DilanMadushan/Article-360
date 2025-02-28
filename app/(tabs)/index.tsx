import React, { useEffect, useState } from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,ScrollView } from "react-native";
import Card from '../../components/Card'
import ArticleModle from '../../model/ArticlModel'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { useSelector } from 'react-redux';
import { findArticle } from '../../slice/ReadSlice';

const DashBoard = () => {

  const [article, setArticle] = useState<ArticleModle[]>(
    [
      new ArticleModle(
    "Impossible is Nothing",
    "https://wbcboxing.com/wp-content/uploads/ali-artew.jpg",
    `I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.’`
  ),
  new ArticleModle(
    "Be Water My Friend",
    "https://images.squarespace-cdn.com/content/v1/6361dd69de5a8f306569332e/7d1101d8-5744-4870-ae9a-ce1a24b25c7e/bruce-lee-ai-generated.jpg",
    `I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.`
  ),
  new ArticleModle(
    "Rejection",
    "https://ew.com/thmb/jbZeqjk4U9RhyEq6Ti-fc6rUbLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/john-rambo-ec49213d8d2147f98c48c3a8dcaa5945.jpg",
    `I believe there's an inner power that makes winners or losers. And the winners are the ones who really listen to the truth of their hearts.`
  )],
);

  return (
     <LinearGradient colors={["#1E1E1E", "#292929"]} style={styles.container}>
          <StatusBar style="dark" />
          {/* <Text style={styles.title}>DASHBOARD</Text> */}
          <ScrollView style={styles.scrollView}>

          {article.map((item, index) => (
          <Card key={index} title={item.title} image={item.image} content={item.content} />
        ))}
            

          </ScrollView>

      </LinearGradient>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#292929"
  },
  scrollView: {
    backgroundColor: '#292929',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffffff",
    textAlign: "center",
    marginTop: 20,
  }
})

export default DashBoard