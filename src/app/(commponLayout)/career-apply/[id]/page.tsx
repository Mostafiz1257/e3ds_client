"use client"
import JobDetails from "@/src/components/job/jobDetails/JobDetails";
import Loader from "@/src/components/shared/Loader/Loader";
import { useGetSinglePostQuery } from "@/src/redux/features/admin/jobApi";
import { use } from "react";

interface Params {
  id: string;
}
interface Props {
  params: Promise<Params>;
}

const Page = ({ params }: Props) => {
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  const { data:JobData, isLoading } = useGetSinglePostQuery(id);
const data = JobData?.data
  if (isLoading) {
    return <Loader/>
  }

  return (
    <div>
   
      {data ? (
        
        <JobDetails data={data} />
      ) : (
        <p>No job found.</p>
      )}
    </div>
  );
};

export default Page;
