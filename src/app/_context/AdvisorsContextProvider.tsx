"use client";

import { useState } from "react";
import AdvisorsContext from "./AdvisorsContext";
import { Advisor } from "../types";

interface Params {
  children: React.ReactNode;
}

export default function AdvisorsContextProvider({ children }: Params) {
  const [advisorId, setAdvisorId] = useState("");
  const [advisorsData, setAdvisorsData] = useState<Advisor[]>();

  const saveAdvisorId = (id: string) => {
    setAdvisorId(id);
  };

  const saveAdvisors = (data: Advisor[]) => {
    setAdvisorsData(data);
  };

  const getAdvisorId = () => advisorId;

  const getAdvisorById = (id: string) => {
    if (id !== advisorId) {
      return;
    }

    return advisorsData?.find((item) => item.id === id);
  };

  return (
    <AdvisorsContext.Provider
      value={{ saveAdvisorId, getAdvisorId, getAdvisorById, saveAdvisors }}>
      {children}
    </AdvisorsContext.Provider>
  );
}
