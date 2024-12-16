"use client";

import ApplicationCard from "@/src/components/application/applicationCard/ApplicationCard";
import Loader from "@/src/components/shared/Loader/Loader";
import { useGetAllApplicationQuery } from "@/src/redux/features/admin/applicationApi";
import { IJobApplication } from "@/src/types/application.type";

const Page = () => {
  const { data, isLoading } = useGetAllApplicationQuery({});
  const allApplications: IJobApplication[] | undefined = data?.data;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {allApplications?.map((application) => (
        <ApplicationCard key={application._id} application={application} />
      ))}
    </div>
  );
};

export default Page;
