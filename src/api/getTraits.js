const apiKey = process.env.VUE_APP_API_KEY;

export async function getTraits(name) {
  try {
    const response = await fetch(`https://api.opensea.io/api/v2/traits/${name}`, {
      method: 'GET',
      headers: {
        'X-API-KEY': apiKey,
        'accept' : 'application/json'
      },
    });

    if (!response.ok) {
      throw new Error(`Ошибка при запросе данных: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Произошла ошибка при обработке данных от API:', error);
    throw error;
  }
}
