<template>
    <div class="main-page">
        <h1>Welcome to NFT's gallery</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dicta veritatis autem obcaecati harum officiis repudiandae tempore ipsam repellat deserunt nobis, quos corporis facere amet accusamus recusandae rem, cupiditate quia!</p>
        <vs-button color="primary" type="filled"  @click="$router.push('/gallery')">Смотреть коллекцию</vs-button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .main-page{
        padding: 200px;
        text-align: center;
    }

    .main-page h1, p{
        margin-bottom: 20px;
    }
</style>