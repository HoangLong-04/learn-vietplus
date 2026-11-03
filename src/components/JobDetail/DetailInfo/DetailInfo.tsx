import React from "react";
import { JobType } from "../../../types/jobType";
import { getLabel } from "../../../utils";
import { jobFormLabels } from "../../../screens/JobListScreen/jobEnum";
import { View } from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import AppCard from "../../common/AppCard";
import AppText from "../../common/AppText";

interface Props {
  jobData: JobType | null;
}

export default function DetailInfo({ jobData }: Props) {
  if (!jobData) return null;

  const educationLabels = {
    none: "Không yêu cầu",
  };
  const items = [
    {
      icon: "work-outline",
      color: "#3478c8",
      label: "Hình thức",
      value: getLabel(jobData.jobForm, jobFormLabels),
    },
    {
      icon: "people-outline",
      color: "#8066d8",
      label: "Số lượng tuyển",
      value: jobData.employeeNumber ? `${jobData.employeeNumber} người` : "",
    },
    {
      icon: "psychology-alt",
      color: "#ef8354",
      label: "Kinh nghiệm",
      value: jobData?.experience || "",
    },
    {
      icon: "school",
      color: "#9b68ca",
      label: "Bằng cấp",
      value: getLabel(jobData?.education, educationLabels),
    },
  ].filter((item) => item.value);
  
  return (
    <AppCard style={[styles.card]}>
      <AppText style={[styles.heading]}>Thông tin chi tiết</AppText>
      <View style={styles.grid}>
        {items.map((item) => (
          <View key={item.label} style={styles.item}>
            <View
              style={[styles.iconWrap, { backgroundColor: `${item.color}15` }]}
            >
              <MaterialIcons name={item.icon} size={17} color={item.color} />
            </View>
            <View style={styles.copy}>
              <AppText style={[styles.label]}>{item.label}</AppText>
              <AppText style={[styles.value]} numberOfLines={2}>
                {item.value}
              </AppText>
            </View>
          </View>
        ))}
      </View>
    </AppCard>
  );
}
