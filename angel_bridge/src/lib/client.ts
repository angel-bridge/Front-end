export const Client = async <T>(
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    body: any = null,
    headers: Record<string, string> = {}
): Promise<T> => {
    const baseUrl = "http://3.39.14.152";
    const options: RequestInit = {
        method,
        headers: {
            "Content-Type": "application/json",
            ...headers,
        },
    };
    if (body) {
        options.body = JSON.stringify(body);
    }

    const response = await fetch(`${baseUrl}${url}`, options);
    if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
};
