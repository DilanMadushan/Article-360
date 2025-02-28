import React, { useEffect, useState } from 'react'
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,ScrollView } from "react-native";
import Card from '../../components/Card'
import ArticleModle from '../../model/ArticlModel'

const DashBoard = () => {

  const [article, setArticle] = useState<ArticleModle[]>([]);

  useEffect(() => {
    if (article.length === 0) {
      setArticle([...article,
        new ArticleModle(
          "Impossible is Nothing",
          "https://wbcboxing.com/wp-content/uploads/ali-artew.jpg",
          `I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion.’`
        ),
      ]);
    }

  }, [article.length]);

  
  
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