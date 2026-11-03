import React from "react";
import AppView from "../../components/common/AppView";
import AppText from "../../components/common/AppText";
import { StyleSheet } from "react-native";

export default function UserProfileScreen({ route }: { route: any }) {
  const { userId } = route.params;
  return (
    <AppView style={styles.container}>
      <AppText>{userId}</AppText>
    </AppView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
