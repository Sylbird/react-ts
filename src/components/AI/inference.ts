async function query(data: string) {
  const options = {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify({ inputs: data, options: { wait_for_model: true } })
  };
  const response = await fetch(
    'https://proxy-api-proxy-api.koyeb.app/StableDiffusion',
    options
  );
  if (!response.ok) {
    throw new Error(
      `Hubo un error al generar la imagen. HTTP error! Status Code: ${response.status}`
    );
  }
  const generatedImage = await response.blob();
  return generatedImage;
}

export default query;
