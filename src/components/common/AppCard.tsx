import React from "react";

import { View, ViewProps } from "react-native";
import { useTheme } from "../../context/ThemeContext";

type Props = ViewProps & {
  children: React.ReactNode;
};

export default function AppCard({ children, style, ...props }: Props) {
  const { colors } = useTheme();

  return (
    <View
      {...props}
      style={[
        {
          padding: 16,
          borderRadius: 12,
          borderWidth: 1,
          marginBottom: 12,

          backgroundColor: colors.card,
          borderColor: colors.border,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}
