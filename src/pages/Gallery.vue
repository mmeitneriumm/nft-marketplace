<template>
    <div>
      <h1 class="app__title">NFT's Gallery</h1>
      <nft-list :nfts="nfts"/>
    </div>
  </template>
  
  <script>
  import nftList from '@/components/nftList.vue';
  import { fetchNFTData } from '@/api/getCollection'
  
  export default {
    name: 'GalleryCollection',
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
        nfts: []
      }
    }
  }
  </script>
  
  <style>

  </style>
  