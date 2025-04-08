async function getTimeApi(userTimeZone: string) {
  const response = await fetch(
    `https://timeapi.io/api/time/current/zone?timeZone=${userTimeZone}`
  );

  if (!response.ok) {
    throw new Error(
      `There was a problem getting the time. HTTP error! Status Code: ${response.status}`
    );
  }
  const data = await response.json();
  return data;
}

export default getTimeApi;
