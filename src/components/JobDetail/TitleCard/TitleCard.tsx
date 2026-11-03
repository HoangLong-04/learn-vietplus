import { View } from "react-native";
import { JobType } from "../../../types/jobType";
import styles from "./styles";
import JobCategoryBadge from "../../Badges/JobCategoryBadge/JobCategoryBadge";
import JobFormBadge from "../../Badges/JobFormBadge/JobFormBadge";
import AppCard from "../../common/AppCard";
import AppText from "../../common/AppText";

interface Props {
  jobData: JobType | null;
}

export default function TitleCard({ jobData }: Props) {
  if (!jobData) return null;

  return (
    <AppCard style={[styles.card]}>
      <View style={styles.metaRow}>
        <View style={styles.badgesContainer}>
          <JobCategoryBadge jobCategory={jobData.jobCategory} />
          <JobFormBadge jobForm={jobData.jobForm} />
        </View>

        <AppText style={[styles.postedAt]}>{jobData.createdAt}</AppText>
      </View>
      <AppText style={[styles.title]}>
        {jobData?.title || "Chưa có tiêu đề"}
      </AppText>
      {jobData.jobForm ? (
        <AppText style={[styles.form]}>{jobData.jobForm}</AppText>
      ) : null}
      {jobData.salary ? (
        <AppText style={[styles.salary]}>{jobData.salary} / giờ</AppText>
      ) : null}
    </AppCard>
  );
}
