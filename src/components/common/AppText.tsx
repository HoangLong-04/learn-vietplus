import React from "react";

import { Text, TextProps } from "react-native";
import { useTheme } from "../../context/ThemeContext";

type Props = TextProps & {
  children: React.ReactNode;
  secondary?: boolean;
};

export default function AppText({
  children,
  secondary = false,
  style,
  ...props
}: Props) {
  const { colors } = useTheme();

  return (
    <Text
      {...props}
      style={[
        {
          fontSize: 16,
          color: secondary ? colors.textSecondary : colors.text,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
