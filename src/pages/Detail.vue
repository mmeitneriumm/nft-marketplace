<template>
    <div class="nft-detail">
        hi {{ $route.params.id }}
    </div>
</template>
<script>
export default {
    name: 'DetailNft',
}
</script>
<style>
    .nft-detail {
      margin: 45px;  
    }
</style>