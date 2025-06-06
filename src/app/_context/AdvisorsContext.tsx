"use client";

import { createContext } from "react";
import { ContextType } from "../types";

const AdvisorsContext = createContext<ContextType | undefined>(undefined);

export default AdvisorsContext;
