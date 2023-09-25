<template>
    <div class="nft-item">
        <div class="nft-item__picture"><img :src="nft.image_url" alt="pics"></div>
        <div class="nft-item__description">
            <div class="nft-item__collection">{{ nft.collection }}</div>
            <div class="nft-item__name">{{ nft.name }}</div>
            <div class="nft-item__price">{{ nft.price }}</div>
        </div>
        <div class="nft-item__button">
            <!-- <button>Details</button> -->
            <vs-button color="primary" type="filled" @click="$router.push(`/gallery/${nft.identifier}`)">More details</vs-button>
        </div>
    </div>
</template>
<script>
import { vsButton } from 'vuesax3'

export default {
    components: vsButton,
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
        background-color: #141417;;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px;
    }

    .nft-item__picture img{
        width: 250px;
        border-radius: 10%;
    }

    .nft-item__description {
        width: 100%;
        justify-content: start;
        margin-bottom: 16px;
    }

    .nft-item__collection {
        font-size: 12px;
        margin-bottom: 8px;
        margin-top: 8px;
        color: #9f9f9f;
    }

    .nft-item__name {
        font-weight: 600;
        margin-bottom: 8px;
    }

    .nft-item__button {
        width: 100%;
    }

    .nft-item__button button {
        width: 100%;
        border: none;
        padding: 10px;
        background-color: #7c81da;
        cursor: pointer;
    }

</style>