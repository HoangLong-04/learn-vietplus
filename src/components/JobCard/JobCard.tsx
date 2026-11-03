import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, View } from "react-native";
import { useTheme } from "../../context/ThemeContext";
import { JobType } from "../../types/jobType";
import AppCard from "../common/AppCard";
import AppText from "../common/AppText";
import { styles } from "./styles";
import { NavigationProp } from "../../types/naviagtionType";

// type NavigationProp = NativeStackNavigationProp<RootStackParamList, "MainTabs">;

const categoryLabels: Record<string, string> = {
  part_time: "PART TIME",
  agriculture: "NÔNG NGHIỆP",
  accountance: "KẾ TOÁN",
};

function formatRelativeTime(dateString: string) {
  const timestamp = new Date(dateString).getTime();

  if (Number.isNaN(timestamp)) {
    return "Không rõ thời gian";
  }

  const elapsedMinutes = Math.max(
    0,
    Math.floor((Date.now() - timestamp) / 60000),
  );

  if (elapsedMinutes < 1) return "Vừa xong";
  if (elapsedMinutes < 60) return `${elapsedMinutes} phút trước`;

  const elapsedHours = Math.floor(elapsedMinutes / 60);
  if (elapsedHours < 24) return `${elapsedHours} giờ trước`;

  const elapsedDays = Math.floor(elapsedHours / 24);
  if (elapsedDays < 30) return `${elapsedDays} ngày trước`;

  const elapsedMonths = Math.floor(elapsedDays / 30);
  if (elapsedMonths < 12) return `${elapsedMonths} tháng trước`;

  return `${Math.floor(elapsedMonths / 12)} năm trước`;
}

function getSalaryLabel(jobData: JobType) {
  const salaryText =
    jobData.jobRequirement?.salaryText ??
    jobData.jobRequirement?.canonical?.salary?.text;
  const salary = salaryText || jobData.salary;

  if (!salary || salary === "0") {
    return "Thỏa thuận";
  }

  return salary.split("(")[0].trim();
}

export default function JobCard({ jobData }: { jobData: JobType }) {
  const navigation = useNavigation<NavigationProp>();
  const { colors } = useTheme();
  const photoUrl = jobData.photos?.[0]?.url;
  const categoryLabel =
    categoryLabels[jobData.jobCategory] ??
    jobData.jobCategory.replace(/_/g, " ").toLocaleUpperCase();
  const location =
    jobData.zone ||
    jobData.jobRequirement?.canonical?.location?.regionLabel ||
    jobData.address ||
    "Chưa cập nhật";

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`Xem việc làm: ${jobData.title}`}
      onPress={() =>
        navigation.navigate("JobDetail", {
          jobId: jobData.id,
        })
      }
    >
      <AppCard style={styles.card}>
        <View style={styles.content}>
          {photoUrl ? (
            <Image
              source={{ uri: photoUrl }}
              resizeMode="cover"
              style={styles.photo}
            />
          ) : (
            <View
              style={[
                styles.photoPlaceholder,
                { backgroundColor: colors.surface },
              ]}
            >
              <MaterialIcons
                name="work-outline"
                size={32}
                color={colors.textSecondary}
              />
            </View>
          )}

          <View style={styles.details}>
            <View style={styles.badges}>
              <View style={[styles.badge, styles.hiringBadge]}>
                <AppText style={styles.hiringLabel}>TUYỂN DỤNG</AppText>
              </View>
              <View style={[styles.badge, styles.categoryBadge]}>
                <AppText style={styles.categoryLabel}>{categoryLabel}</AppText>
              </View>
            </View>

            <AppText numberOfLines={2} style={styles.title}>
              {jobData.title}
            </AppText>

            <View style={styles.metadata}>
              <MaterialIcons
                name="location-on"
                size={15}
                color={colors.textSecondary}
              />
              <AppText numberOfLines={1} secondary style={styles.metadataText}>
                {location} ·{" "}
                {categoryLabel === "PART TIME" ? "Part time" : categoryLabel}
              </AppText>
            </View>
          </View>
        </View>

        <View style={[styles.separator, { backgroundColor: colors.border }]} />

        <View style={styles.footer}>
          <View style={styles.metadata}>
            <MaterialIcons
              name="access-time"
              size={15}
              color={colors.textSecondary}
            />
            <AppText secondary style={styles.metadataText}>
              {formatRelativeTime(jobData.createdAt)}
            </AppText>
          </View>
          <AppText
            numberOfLines={1}
            style={[styles.salary, { color: colors.primary }]}
          >
            {getSalaryLabel(jobData)}
          </AppText>
        </View>
      </AppCard>
    </Pressable>
  );
}
