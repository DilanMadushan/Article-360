import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import Card from "../../components/Card";
import ArticleModle from "../../model/ArticlModel";
import { useSelector } from "react-redux";

const DashBoard = () => {
  const articles = useSelector((state) => state.article);

  return (
    <LinearGradient colors={["#1E1E1E", "#292929"]} style={styles.container}>
      <StatusBar style="dark" />
      {/* <Text style={styles.title}>DASHBOARD</Text> */}
      <ScrollView style={styles.scrollView}>
        {articles.slice(0, 2).map((item: ArticleModle, index) => (
          <Card
            key={index}
            title={item.title}
            image={item.image}
            content={item.content.split("!")[0]}
          />
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#292929",
  },
  scrollView: {
    backgroundColor: "#292929",
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ffffff",
    textAlign: "center",
    marginTop: 20,
  },
});

export default DashBoard;
