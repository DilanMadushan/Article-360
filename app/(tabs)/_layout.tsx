import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#292929", 
          paddingBottom: 5,
          height: 60,
        },
        tabBarActiveTintColor: "#CE3248", 
        tabBarInactiveTintColor: "#aaa", 
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
        },
        
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "DASHBOARD",
          title: "DASHBOARD",
          headerStyle:{
            backgroundColor: "#292929",
        },headerTintColor: "#CE3248",
        headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 30,
          },
          headerTitleAlign: "center",
          
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Articles"
        options={{
          headerTitle: "ARTICLE",
          title: "ARTICLE",
          headerStyle:{
            backgroundColor: "#292929",
        },headerTintColor: "#CE3248",
        headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 30,
          },headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="ArticleCreate"
        options={{
          headerTitle: "CREATE",
          title: "CREATE",
          headerStyle:{
            backgroundColor: "#292929",
        },headerTintColor: "#CE3248",
        headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 30,
          },headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="create" size={size} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}

export default TabLayout;
