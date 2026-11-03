import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  jobCategory: string;
}

export default function JobCategoryBadge({ jobCategory }: Props) {
  return (
    <View>
      {jobCategory ? (
        <Text
          style={[
            styles.tag,
            styles.categoryTag,
            // isDark && styles.categoryTagDark,
          ]}
          numberOfLines={1}
        >
          {jobCategory}
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
  categoryTag: {
    backgroundColor: "#fff1ea",
    color: "#d97845",
  },
  categoryTagDark: {
    backgroundColor: "#493126",
    color: "#ffb38f",
  },
});
