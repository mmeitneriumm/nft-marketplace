<template>
    <div class="nft-item">
        <div class="nft-item__picture"><img src="../../public/images/azuki.png" alt="pics"></div>
        <div class="nft-item__collection">{{ nft.collectionName }}</div>
        <div class="nft-item__name">{{ nft.nftName }}</div>
        <div class="nft-item__price">{{ nft.price }}</div>
    </div>
</template>
<script>
export default {
    props: {
        nft: {
            type: Object,
            required: true
        }
    }
}
</script>
<style>
    .nft-item{
        padding: 20px;
        border: 1px solid #1e2023;
        border-radius: 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .nft-item__picture img{
        width: 150px;
    }
</style>