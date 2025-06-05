const url = process.env.NEXT_PUBLIC_SERVER_URL;

const createAdvisor = async <T>(payload: T) => {
  try {
    const response = await fetch(url as string, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error while fetching data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error as Error);
  }
};

export default createAdvisor;
