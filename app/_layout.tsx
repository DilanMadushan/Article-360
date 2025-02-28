import { Stack } from "expo-router";
import React from "react";

function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#292929", 
        },
        headerTintColor: "#CE3248", 
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
        },
        animation: "slide_from_bottom", 
      }}
    >


      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

    
      <Stack.Screen
        name="Login"
        options={{
          headerShown: false,
          presentation: "modal", 
        }}
      />
      <Stack.Screen
        name="SignUp"
        options={{
          headerShown: false,
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="DisplayArticle"
      />
    </Stack>
  );
}

export default RootLayout;
