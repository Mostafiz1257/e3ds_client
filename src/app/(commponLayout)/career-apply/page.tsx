"use client";
import JobCard from "@/src/components/job/jobCard/JobCard";
import Loader from "@/src/components/shared/Loader/Loader";
import TitleHeader from "@/src/components/shared/TitleHeader/TitleHeader";
import { useGetAllJobPostQuery } from "@/src/redux/features/admin/jobApi";

const Page = () => {
  const { data, isLoading } = useGetAllJobPostQuery({});
  const jobPosts = data?.data;
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <TitleHeader />
      <div>
        {jobPosts?.map((post) => <JobCard key={post._id} post={post} />)}
      </div>
    </>
  );
};

export default Page;
