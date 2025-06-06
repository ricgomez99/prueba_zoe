import { Advisor } from "./dataTypes";

export interface ContextType {
  saveAdvisorId: (id: string) => void;
  saveAdvisors: (data: Advisor[]) => void;
  getAdvisorId: () => string;
  getAdvisorById: (id: string) => Data<Advisor> | undefined;
}

type Data<T> = T | null;
