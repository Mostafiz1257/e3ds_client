"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import { currentUser } from "@/src/redux/features/auth/authSlice";
import { useAppSelector } from "@/src/redux/hooks";

const ShowAdmin = () => {
  const user = useAppSelector(currentUser);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div>
      {user?.role === "admin" && (
        <Link href={"/admin/create-job"}>
          <p className="hover:text-blue-800  border-1 px-3 rounded-full border-blue-700 text-blue-700 cursor-pointer">
            Admin
          </p>
        </Link>
      )}
    </div>
  );
};

export default ShowAdmin;
