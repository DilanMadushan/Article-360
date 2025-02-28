import { Stack } from "expo-router";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store"; // Ensure this path is correct

export default function RootLayout() {
  return (
    <Provider store={store}>
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
          name="index"
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
        <Stack.Screen name="DisplayArticle" />

      </Stack>
    </Provider>
  );
}
