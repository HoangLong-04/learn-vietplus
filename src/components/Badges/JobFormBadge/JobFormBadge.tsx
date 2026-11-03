import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  jobForm: string;
}

export default function JobFormBadge({ jobForm }: Props) {
  return (
    <View>
      {jobForm ? (
        <Text
          style={[styles.tag, styles.formTag]}
          numberOfLines={1}
        >
          {jobForm}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    borderRadius: 3,
    fontSize: 9,
    fontWeight: "700",
    marginRight: 5,
    overflow: "hidden",
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  formTag: {
    backgroundColor: "#e3f2fd",
    color: "#1976d2",
  },
  formTagDark: {
    backgroundColor: "#1d3b52",
    color: "#90caf9",
  },
});
