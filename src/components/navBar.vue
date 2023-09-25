<template>
    <div class="nav-bar">
        <div class="nav-bar__title" @click="$router.push('/')">
            NFT
        </div>
      <vs-navbar v-model="activeItem" class="nabarx">
  
        <vs-navbar-item index="0">
          <a href="#" @click="$router.push('/')">MainPage</a>
        </vs-navbar-item>
        <vs-navbar-item index="1">
          <a href="#" @click="$router.push('/gallery')">Gallery</a>
        </vs-navbar-item>
        <vs-navbar-item index="2">
          <a href="#">Update</a>
        </vs-navbar-item>
      </vs-navbar>
    </div>
  </template>
  <script>
  export default {
    data:()=>({
      activeItem: 0
    })
  }
  </script>
  <style>
    .nav-bar{
        background-color: #141417;
        margin: 0 40px 40px 40px;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
    }

    .nav-bar__title{
        display: inline-block;
        align-self: center;
        padding-left: 20px;
        cursor: pointer;
    }
</style>