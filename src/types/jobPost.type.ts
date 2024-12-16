export interface IJobPost {
  _id: string;
  title: string;
  description: string;
  requirements: string[];
  location: string;
  salaryRange: string;
  jobType: "Full-Time" | "Part-Time" | "Contract" | "Internship";
  postedBy: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}
