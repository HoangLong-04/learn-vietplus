import React from "react";
import { JobType } from "../../../types/jobType";
import styles from "./styles";
import AppCard from "../../common/AppCard";
import AppText from "../../common/AppText";

interface Props {
  jobData: JobType | null;
}

export default function DescriptionCard({ jobData }: Props) {
  if (!jobData?.description) return null;

  return (
    <AppCard style={[styles.card]}>
      <AppText style={[styles.heading]}>Mô tả công việc</AppText>
      <AppText style={[styles.description]}>
        {jobData?.description.trim() || "Chưa có mô tả cho công việc này."}
      </AppText>
    </AppCard>
  );
}
