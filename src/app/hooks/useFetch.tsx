"use client";

import { useState, useEffect, useCallback } from "react";
import useAdvisorsContext from "./useAdvisorsContext";

type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
  data: Data<T>;
  loading: boolean;
  error: ErrorType | undefined;
  refetch: () => void;
}

export default function useFetch<T>(url: string): Params<T> {
  const [data, setData] = useState<Data<T>>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType>();
  const { saveAdvisors } = useAdvisorsContext();

  const fetchAdvisors = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (!data) {
        throw new Error("Error while fetching data");
      }

      saveAdvisors(data);
      setData(data);
      setError(null);
    } catch (error) {
      console.log(error as Error);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchAdvisors();
  }, [fetchAdvisors]);

  return {
    data,
    error,
    loading,
    refetch: fetchAdvisors,
  };
}
