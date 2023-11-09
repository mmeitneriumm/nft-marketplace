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

import { getAnNft } from "@/api/getAnNft"

export default {
    name: 'DetailNft',
    data(){
        return {
            nftData: [],
            owner: '',
            traits: []
        }
    },
    async created() {
      try {
        const identifier = this.$route.params.id;
        const contract = this.$route.query.contract;

        this.nftData = await getAnNft(identifier, contract);
        console.log(this.nftData)
        this.traits = this.nftData.traits
        this.owner = this.nftData.owners[0].address

      } catch (error) {
        console.error('Ошибка при получении данных из API:', error);
      }
    },
}
</script>
<style>
    .nft-detail {
      display: flex;
      margin: 45px;
      background-color: #141417;
      border-radius: 20px;
      padding: 10px;
      width: fit-content;
    }

    .nft-detail__picture {
        padding: 10px; 
    }

    .nft-detail__picture img {
        border-radius: 20px;
        max-width: 400px;
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
        margin-right: 5px;
        border-radius: 10px;
        width: 100%;
    }

    .nft-detail__type {
        font-size: 12px;
        opacity: 0.4;
        margin-bottom: 4px;
    }

    .nft-detail__value {
        opacity: 0.8;
    }

    .nft-detail__traits{
        display: grid;
        gap: 8px;
        grid-template-columns: 1fr 1fr;
        margin-top: 20px;
        margin-bottom: 5px;
    }

    .nft-detail__button {
        margin-bottom: 8px;
        margin-right: 6px;
    }

    .nft-detail__button button{
        width: 100%;
    }
</style>