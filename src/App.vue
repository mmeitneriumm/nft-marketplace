<template>
  <div id="app">
    <h1>NFT's Gallery</h1>
    <nft-list :nfts="nfts"/>
  </div>
</template>

<script>
import nftList from './components/nftList.vue';
import { fetchNFTData } from './api/api'

export default {
  name: 'App',
  components: {
    nftList
  },

  async created() {
    try {
      const nftData = await fetchNFTData();
      this.nfts = nftData.nfts
      console.log(this.nfts)
    } catch (error) {
      console.error('Ошибка при получении данных из API:', error);
    }
  },

  data(){
    return {
      nfts: null
    }
  }
}
</script>

<style>
body {
  background-color: #18191c;
  margin: 20px;
}
#app {
  font-family: Verdana, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
</style>
