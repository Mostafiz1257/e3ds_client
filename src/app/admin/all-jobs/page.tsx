"use client";
import ReviewJob from "@/src/components/admin/reviewJob/ReviewJob";
import Loader from "@/src/components/shared/Loader/Loader";
import { useGetAllJobPostQuery } from "@/src/redux/features/admin/jobApi";
import { IJobPost } from "@/src/types/jobPost.type";
const Page = () => {
  const { data, isLoading } = useGetAllJobPostQuery({});
  const jobPosts: IJobPost[] | undefined = data?.data;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div>
        {jobPosts?.map((post) => <ReviewJob key={post._id} post={post} />)}
      </div>
    </>
  );
};

export default Page;
