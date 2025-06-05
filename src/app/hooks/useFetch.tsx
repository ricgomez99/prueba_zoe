"use client";

import { useState, useEffect } from "react";

type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
  data: Data<T>;
  loading: boolean;
  error: ErrorType | undefined;
}

export default function usefetch<T>(url: string): Params<T> {
  const [data, setData] = useState<Data<T>>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType>();

  useEffect(() => {
    setLoading(true);
    const fetchAdvisors = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data) {
          throw new Error("Error while fetching data");
        }

        setData(data);
        setError(null);
      } catch (error) {
        console.log(error as Error);
      } finally {
        setLoading(false);
      }
    };
    fetchAdvisors();
  }, [url]);

  return {
    data,
    error,
    loading,
  };
}
