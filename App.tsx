import React from "react";
import { ThemeProvider, useTheme } from "./src/context/ThemeContext";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import RootStackNavigator from "./src/navigation/RootStackNavigator";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

function AppContent() {
  const { theme } = useTheme();
  return (
    <NavigationContainer>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />

      <RootStackNavigator />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
