import React from "react";
import { StyleSheet, Switch, View } from "react-native";
import AppView from "../../components/common/AppView";
import AppText from "../../components/common/AppText";
import AppCard from "../../components/common/AppCard";
import { useTheme } from "../../context/ThemeContext";

export default function ProfileScreen() {
  const { colors, theme, toggleTheme } = useTheme();
  return (
    <AppView style={styles.container}>
      <AppText>Hồ sơ</AppText>

      <AppCard>
        <View style={styles.row}>
          <AppText>Giao diện tối</AppText>

          <Switch
            value={theme === "dark"}
            onValueChange={toggleTheme}
            trackColor={{
              false: colors.border,
              true: colors.primary,
            }}
          />
        </View>
      </AppCard>
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
