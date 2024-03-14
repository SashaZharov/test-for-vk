export const getFacts = async () => {
  const url = "https://catfact.ninja/fact";

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    })
    .then((data) => {
      return data.fact;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      throw error;
    });
};
