import { describe, it, expect, vi, beforeEach } from "vitest";
import { updateAdvisor } from "../_lib/updateAdvisor";

vi.mock("process", () => ({
  env: {
    NEXT_PUBLIC_SERVER_URL: "http://localhost:3001/advisor",
  },
}));

const mockFetch = vi.fn();

beforeEach(() => {
  mockFetch.mockReset();
  global.fetch = mockFetch;
});

describe("updateAdvisor", () => {
  const mockPayload = { name: "John Doe", income: 30000 };
  const mockId = "123";
  const expectedUrl = "http://localhost:3001/advisor/123";

  it("should update advisor data and return JSON response on success", async () => {
    const mockResponseData = {
      id: mockId,
      name: "John Doe",
      income: 30000,
      status: "updated",
    };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockResponseData),
      status: 200,
      statusText: "OK",
    });

    const result = await updateAdvisor({ payload: mockPayload, id: mockId });

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(expectedUrl, {
      method: "PATCH",
      body: JSON.stringify(mockPayload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    expect(result).toEqual(mockResponseData);
  });

  it("should throw an error if the response is not ok", async () => {
    const mockErrorResponse = { message: "Invalid input" };

    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve(mockErrorResponse),
      status: 400,
      statusText: "Bad Request",
    });

    await expect(
      updateAdvisor({ payload: mockPayload, id: mockId })
    ).rejects.toThrow("Error while sending data to the server");

    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  it("should throw a generic error if response is not ok and json parsing fails", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: () => Promise.reject(new Error("Failed to parse JSON")),
      status: 500,
      statusText: "Internal Server Error",
    });

    await expect(
      updateAdvisor({ payload: mockPayload, id: mockId })
    ).rejects.toThrow("Error while sending data to the server");
  });
});
