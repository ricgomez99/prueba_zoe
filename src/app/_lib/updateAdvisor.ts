export const updateAdvisor = async <T>({
  payload,
  id,
}: {
  payload: T;
  id: string;
}) => {
  try {
    const url =
      process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3001/advisor";
    const response = await fetch(`${url}/${id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error while sending data to the server");
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }
};
