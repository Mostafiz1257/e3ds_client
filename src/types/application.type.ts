export interface IJobPost {
  _id: string;
  title: string;
  salaryRange: string;
  jobType: string;
}

export interface IJobApplication {
  _id: string;
  name: string;
  email: string;
  website?: string;
  linkedin?: string;
  address: string;
  resume: string;
  jobPost: IJobPost;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
