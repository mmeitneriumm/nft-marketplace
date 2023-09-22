<template>
  <div id="app">
    <h1>NFT's Gallery</h1>
    <nft-list :nfts="nfts"/>
  </div>
</template>

<script>
import nftList from './components/nftList.vue';
export default {
  name: 'App',
  components: {
    nftList
  },
  data(){
    return {
      nfts: [
        {id: 1, collectionName: "Bored Ape Yacht Club", nftName: "Bored Ape Yacht Club #3238", price: "24.64 ETH", src: "../public/images/azuki.png"},
        {id: 1, collectionName: "Bored Ape Yacht Club", nftName: "Bored Ape Yacht Club #5218", price: "24.64 ETH", src: "../public/images/azuki.png"},
        {id: 1, collectionName: "Bored Ape Yacht Club", nftName: "Bored Ape Yacht Club #1837", price: "24.64 ETH", src: "../public/images/azuki.png"},
        {id: 1, collectionName: "Bored Ape Yacht Club", nftName: "Bored Ape Yacht Club #1837", price: "24.64 ETH", src: "../public/images/azuki.png"}
      ]
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
