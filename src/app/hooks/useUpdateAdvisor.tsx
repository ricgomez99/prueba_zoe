import { useState } from "react";
import { updateAdvisor } from "../_lib";

interface Params<T> {
  payload: T;
  id: string;
}

export default function useUpdateAdvisor<T>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const update = async ({ payload, id }: Params<T>) => {
    setLoading(true);
    try {
      const data = await updateAdvisor<T>({ payload, id });

      if (!data) {
        throw new Error("error while sending data to the server");
      }

      setError(null);
      return data;
    } catch (error) {
      setError(error as Error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { update, loading, error };
}
