"use client";
import Link from "next/link";
import { currentUser } from "@/src/redux/features/auth/authSlice";
import { useAppSelector } from "@/src/redux/hooks";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";

const ShowLogin = () => {
  const user = useAppSelector(currentUser);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; 

  return (
    <>
     {user?.role!=='admin'  && (
      <Link href={"/login"}>
    <Button className="px-4 py-2 bg-blue-600 rounded-3xl hover:bg-blue-700 transition duration-300">
        Login 
    </Button>
    </Link>
        )}
    </>
    
  );
};

export default ShowLogin;
