<template>
    <div v-if="nftData" class="nft-detail">
       <div class="nft-detail__picture"><img :src="nftData.image_url" alt="pics"></div>
       <div class="nft-detail__info">
        <div class="nft-detail__description">
            <div class="nft-detail__collection">{{ nftData.collection }}</div>
            <div class="nft-detail__title">{{ nftData.name }}</div>
            <div class="nft-detail__owner">Owned by <span>{{ owner }}</span></div>
            <div v-if="traits" class="nft-detail__traits">
                <div class="nft-detail__trait" v-for="trait in traits" :key="trait.value">
                    <div class="nft-detail__type">{{ trait.trait_type }}</div>
                    <div class="nft-detail__value">{{ trait.value }}</div>
                </div>
            </div>
        </div>
        <div class="nft-detail__button">
            <vs-button color="primary" type="filled">Buy</vs-button>
        </div>
       </div>
    </div>
</template>
<script>
export default {
    name: 'DetailNft',
    data(){
        return {
            nftData: [],
            owner: '',
            traits: []
        }
    },
    mounted(){
        const identifier = this.$route.params.id
        
        const apiUrl = `https://api.opensea.io/v2/chain/ethereum/contract/0xED5AF388653567Af2F388E6224dC7C4b3241C544/nfts/${identifier}`
        const apiKey = process.env.VUE_APP_API_KEY;
        const axiosConfig = {
            method: 'GET',
            headers: {
                'X-API-KEY': apiKey,
                accept: 'application/json'
            }
        }

        fetch(apiUrl, axiosConfig)
            .then((response) => response.json())
            .then(response => {
                this.nftData = response.nft
                this.traits = this.nftData.traits
                console.log('nftdata: ', this.nftData);
                this.getOwner()
            })
            .catch((error) => {console.error(error)})
    },
    methods: {
        getOwner(){
            this.owner = this.nftData.owners[0].address
        }
    }
}
</script>
<style>
    .nft-detail {
      display: flex;
      margin: 45px;
      background-color: #141417;
      border-radius: 20px;
      padding: 10px;
    }

    .nft-detail__picture {
        padding: 10px; 
    }

    .nft-detail__picture img {
        border-radius: 20px;
    }

    .nft-detail__info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px; 
    }

    .nft-detail__collection {
        margin-bottom: 16px;
    }

    .nft-detail__title {
        font-size: 32px;
        margin-bottom: 10px;
    }

    .nft-detail__owner span{
        font-size: 11px;
    }

    .nft-detail__trait{
        padding: 10px;
        background-color: #1e2023;
        margin-bottom: 5px;
        margin-right: 5px;
        border-radius: 10px;
        width: 48%;
    }

    .nft-detail__type {
        font-size: 12px;
        opacity: 0.4;
        margin-bottom: 8px;
    }

    .nft-detail__value {
        opacity: 0.8;
    }

    .nft-detail__traits{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-top: 20px;
    }

    .nft-detail__button {
        margin-bottom: 8px;
        margin-right: 6px;
    }

    .nft-detail__button button{
        width: 100%;
    }
</style>