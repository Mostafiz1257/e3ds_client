"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

const projectId = `${process.env.NEXT_PUBLIC_CLARITY_ID}`; 

export default function MsClarity() {
  useEffect(() => {
    
    if (typeof window !== "undefined") {
    
      Clarity.init(projectId);

     
      Clarity.consent(true);
    }
  }, []);

  return null;
}
