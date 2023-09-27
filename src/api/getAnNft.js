const apiKey = process.env.VUE_APP_API_KEY;

export async function getAnNft(identifier) {
    const apiUrl = `https://api.opensea.io/v2/chain/ethereum/contract/0xED5AF388653567Af2F388E6224dC7C4b3241C544/nfts/${identifier}`
    const apiConfig = {
        method: 'GET',
        headers: {
            'X-API-KEY': apiKey,
            'accept' : 'application/json'
        },
    }

  try {
    const response = await fetch(apiUrl, apiConfig);

    if (!response.ok) {
      throw new Error(`Ошибка при запросе данных: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.nft;
  } catch (error) {
    console.error('Произошла ошибка при обработке данных от API:', error);
    throw error;
  }
}
