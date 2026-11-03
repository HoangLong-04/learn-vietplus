
export interface JobPhoto {
  id: string;
  ownerId: string;
  url: string;
  photoType: string;
  variantLabel: string | null;
}

export interface JobSalary {
  text: string | null;
  type: string;
  amount: number | null;
  currency: string;
}

export interface JobLocation {
  address: string;
  district: string | null;
  regionId: string;
  regionLabel: string;
  subDistrict: string | null;
}

export interface JobCanonical {
  salary: JobSalary;
  version: number;
  location: JobLocation;
  jobCategoryId: string;
  showPhonePublicly: boolean;
}

export interface JobAiMetadata {
  tasks: string[];
  skills: string[];
  zoneId: string | null;
  benefits: string[];
  workShift: string;
  hasOvertime: boolean | null;
  aiConfidence: number;
  offersPickup: boolean;
  workingHours: string;
  acceptedVisaTypes: string[];
  extractionVersion: string;
  genderRequirement: string;
}

export interface JobRequirement {
  benefits: string[] | null;
  canonical: JobCanonical;
  visaTypes: string[] | null;
  workShift: string | null;
  aiMetadata: JobAiMetadata;
  salaryText: string | null;
  hasOvertime: boolean;
  workingHours: string | null;
  pickupLocation: string;
  genderRequirement: string;
}

export interface JobAuthor {
  fullName: string;
  email: string;
  phone: string;
  rank: string;
  rating: number;
  totalReviewsCount: number;
  actualAverageStars: number;
  photo: string;
  photoUrl: string;
  avatar: string;
}

export interface JobType {
  id: string;
  authorId: string;
  title: string;
  role: string;
  jobCategory: string;
  jobForm: string;
  salary: string;
  description: string;
  address: string;
  zone: string;
  phone: string;
  experience: string;
  education: string;
  employeeNumber: number;
  yearOfBirth: string;
  expire: string;
  photos: JobPhoto[];
  jobRequirement: JobRequirement;
  connect: number;
  activeStat: string;
  reason: string | null;
  createdAt: string;
  updatedAt: string;
  author: JobAuthor;
  isFavorite: boolean;
}
