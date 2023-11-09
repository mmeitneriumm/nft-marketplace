<template>
    <div>
      <h1 class="app__title">NFT's Gallery</h1>
      <nft-list :nfts="nfts"/>
    </div>
  </template>
  
  <script>
  import nftList from '@/components/nftList.vue';
  import { fetchNFTData } from '@/api/getCollection';
  import { getTraits } from '@/api/getTraits';
  
  export default {
    name: 'GalleryCollection',
    components: {
      nftList
    },
  
    async created() {
      const collectionName = this.$route.params.name
      
      try {
        const nftData = await fetchNFTData(collectionName);
        this.nfts = nftData.nfts
        
        const collectionTraits = await getTraits(collectionName);
        this.traits = collectionTraits;

        console.log(this.traits, "this.traits")
      } catch (error) {
        console.error('Ошибка при получении данных из API:', error);
      }
    },
  
    data(){
      return {
        nfts: [],
        traits: []
      }
    }
  }
  </script>
  
  <style>

  </style>
  