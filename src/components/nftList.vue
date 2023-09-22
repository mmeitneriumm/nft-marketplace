<template>
    <div v-if="nfts.length > 0" class="nft-list">
        <nft-item :nft="nft" v-for="nft in nfts" :key="nft.id" />
    </div>
    <div v-else>
        <p>no nft</p>
    </div>
</template>
<script>
import nftItem from './nftItem.vue';
export default {
    name: 'nftList',
    components: {nftItem},
    props: {
        nfts: {
            type: Array,
            required: true
        }
    }
}
</script>
<style>
    .nft-list{
        display: flex;
        justify-content: space-between;
        margin: 30px;
    }
</style>