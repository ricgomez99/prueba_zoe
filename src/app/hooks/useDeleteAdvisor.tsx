import { useState } from "react";
import { deleteAdvisor } from "../_lib";

export default function useDeleteAdvisor() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const remove = async (id: string) => {
    setLoading(true);
    try {
      const data = await deleteAdvisor(id);

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

  return { remove, loading, error };
}
