let controller = new AbortController();

export const getUserAge = (name: string) => {
  const url = `https://api.agify.io/?name=${name}`;

  controller.abort();
  controller = new AbortController();

  const fetchPromise = fetch(url, {
    signal: controller.signal,
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });

  const dataPromise = fetchPromise.then((data) => {
    console.log(data.age);
    return data.age;
  });

  const errorPromise = fetchPromise.catch((error) => {
    if (error.name === "AbortError") {
      console.log("Request was aborted:", error);
      return null;
    } else {
      console.error("Error fetching data:", error);
      throw error;
    }
  });

  return Promise.race([dataPromise, errorPromise]);
};
