import { useCallback } from "react";
import { ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useFocusEffect } from "@react-navigation/native";
import { fetchJobDetail } from "../../redux/slices/jobDetail/jobDetailThunk";
import AppView from "../../components/common/AppView";
import ImageGallery from "../../components/JobDetail/ImageGallery/ImageGallery";
import TitleCard from "../../components/JobDetail/TitleCard/TitleCard";
import DetailInfo from "../../components/JobDetail/DetailInfo/DetailInfo";
import DescriptionCard from "../../components/JobDetail/DescriptionCard/DescriptionCard";
import LocationCard from "../../components/JobDetail/LocationCard/LocationCard";
import AuthorCard from "../../components/JobDetail/AuthorCard/AuthorCard";
import styles from "./styles";

export default function JobDetailScreen({ route }: { route: any }) {
  const { jobId } = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const { jobDetail } = useSelector((state: RootState) => state.jobDetail);

  useFocusEffect(
    useCallback(() => {
      dispatch(fetchJobDetail(jobId));
    }, [dispatch]),
  );
  return (
    <AppView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <ImageGallery jobData={jobDetail} />
        <TitleCard jobData={jobDetail} />
        <DetailInfo jobData={jobDetail} />
        <DescriptionCard jobData={jobDetail} />
        <LocationCard address={jobDetail?.address} zone={jobDetail?.zone} />
        <AuthorCard jobData={jobDetail} />
      </ScrollView>
    </AppView>
  );
}
