import React from "react";
import { JobType } from "../../../types/jobType";
import AppCard from "../../common/AppCard";
import { Pressable, View } from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import AppText from "../../common/AppText";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../../context/ThemeContext";
import { NavigationProp } from "../../../types/naviagtionType";

interface Props {
  jobData: JobType | null;
}

export default function AuthorCard({ jobData }: Props) {
  if (!jobData) return null;

  const { colors } = useTheme();
  const navigate = useNavigation<NavigationProp>();

  const name =
    jobData?.author?.fullName || jobData?.author?.fullName || "Nhà tuyển dụng";

  const initials = name
    .split(/\s+/)
    .slice(-2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();

  const handlePress = () => {
    navigate.navigate("userProfile", { userId: jobData.authorId });
  };

  return (
    <AppCard style={styles.card}>
      <View style={[styles.avatar]}>
        <AppText style={[styles.initials]}>{initials}</AppText>
      </View>

      <View style={styles.details}>
        <AppText style={[styles.name]} numberOfLines={1}>
          {name}
        </AppText>
        <View style={styles.locationRow}>
          <MaterialIcons name="location-on" size={12} color={colors.icon} />
          <AppText style={[styles.location]}>
            {jobData?.zone || "Chưa cập nhật"}
          </AppText>
        </View>
      </View>

      <Pressable onPress={handlePress} style={[styles.badge]}>
        <AppText style={[styles.badgeText]}>Xem hồ sơ</AppText>
      </Pressable>
    </AppCard>
  );
}
