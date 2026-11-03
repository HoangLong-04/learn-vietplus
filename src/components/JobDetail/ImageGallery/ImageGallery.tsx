import React from "react";
import { JobType } from "../../../types/jobType";
import { Image, Text, View } from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  jobData: JobType | null;
}

export default function ImageGallery({ jobData }: Props) {
  if (!jobData) return null;

  const imageUri = jobData?.photos?.[0]?.url;
  return (
    <View style={[styles.container]}>
      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={styles.image}
          resizeMode="cover"
          accessibilityLabel={"Ảnh công việc"}
        />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <MaterialIcons name="work-outline" size={42} />
          <Text style={[styles.placeholderText]}>Chưa có hình ảnh</Text>
        </View>
      )}
      {/* {photos?.length > 1 ? (
        <View style={styles.pagination}>
          {photos.map((photo, index) => (
            <View
              key={photo.id || `${photo.url}-${index}`}
              style={[styles.dot, index === 0 && styles.activeDot]}
            />
          ))}
        </View>
      ) : null} */}
    </View>
  );
}
