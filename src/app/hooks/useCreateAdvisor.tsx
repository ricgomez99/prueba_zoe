import createAdvisor from "../_lib/createAdvisor";
import { useState } from "react";

export default function useCreateAdvisor<T>() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const create = async (payload: T) => {
    setLoading(true);
    try {
      const data = await createAdvisor<T>(payload);

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

  return { create, loading, error };
}
