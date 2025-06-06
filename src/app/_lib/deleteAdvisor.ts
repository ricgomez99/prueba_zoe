const url = process.env.NEXT_PUBLIC_SERVER_URL;

export const deleteAdvisor = async (id: string) => {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
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
