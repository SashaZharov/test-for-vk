import { FACTS_URL } from "@shared/constants";

export const getFacts = async () => {
  return fetch(FACTS_URL)
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
      return;
    });
};
