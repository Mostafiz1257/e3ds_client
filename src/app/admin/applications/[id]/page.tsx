"use client";

import Loader from "@/src/components/shared/Loader/Loader";
import ApplicantDetails from "@/src/components/userInfo/applicantDetails/ApplicantDetails";
import { useGetSingleApplicationQuery } from "@/src/redux/features/admin/applicationApi";
import { use } from "react";

interface Params {
  id: string;
}
interface Props {
  params: Promise<Params>;
}

const page = ({ params }: Props) => {
  const resolvedParams = use(params);
  const { id } = resolvedParams;
  const { data: applicantData, isLoading } = useGetSingleApplicationQuery(id);
  const data = applicantData?.data;
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
       {data ? (
        
        <ApplicantDetails data={data} />
      ) : (
        <p>No job found.</p>
      )}
    </div>
  );
};

export default page;