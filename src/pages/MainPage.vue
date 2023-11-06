<template>
    <div class="main-page">
        <h1>Welcome to NFT's gallery</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dicta veritatis autem obcaecati harum officiis repudiandae tempore ipsam repellat deserunt nobis, quos corporis facere amet accusamus recusandae rem, cupiditate quia!</p>
        <!-- <vs-button color="primary" type="filled"  @click="$router.push('/gallery')">Смотреть коллекцию</vs-button> -->
        <div class="filters">
            <vs-input class="inputx" placeholder="Placeholder" v-model="searchValue"/>
            <my-select v-model="selectedSort" :options="sortOptions" />
        </div>
        <div class="collection" v-if="collectionList">
            <div class="collection-item" v-for="collection in collectionList" :key="collection.id" @click="$router.push(`/gallery/${collection.name}`)">
                <div class="collection-item__number">{{ collection.id }}</div>
                <div class="collection-item__preview"><img :src="collection.preview" alt="pics"></div>
                <div class="collection-item__name">{{ collection.name }}</div>
                <div class="collection-item__floorprice">{{ collection.floorPrice }} ETH</div>
            </div>
        </div>
    </div>
</template>
<script>
import mySelect from '../components/mySelect.vue';

export default {
    name: 'mainPage',
    components: {mySelect},
    data(){
        return {
            collectionList: [
                {id: 1, name: 'boredapeyachtclub', floorPrice: '4.65', address: '0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D', preview: 'https://i.seadn.io/gae/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB?auto=format&dpr=1&w=3840'},
                {id: 2, name: 'degods', floorPrice: '3.4', address: '0x8821BeE2ba0dF28761AffF119D66390D594CD280', preview: 'https://i.seadn.io/gcs/files/c6cb0b1d6f2ab61c0efacf00e62e2230.jpg?auto=format&dpr=1&w=3840'},
                {id: 3, name: 'cryptopunks', floorPrice: '6', address: '0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB', preview: 'https://i.seadn.io/gae/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE?auto=format&dpr=1&w=3840'},
                {id: 4, name: 'doodles-official', floorPrice: '1.23', address: '0x8a90CAb2b38dba80c64b7734e58Ee1dB38B8992e', preview: 'https://i.seadn.io/gae/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ?auto=format&dpr=1&w=3840'},
                {id: 5, name: 'clonex', floorPrice: '1.21', address: '0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B', preview: 'https://i.seadn.io/gae/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg?auto=format&dpr=1&w=3840'},
                {id: 6, name: 'invisiblefriends', floorPrice: '0.29', address: '0x59468516a8259058baD1cA5F8f4BFF190d30E066', preview: 'https://i.seadn.io/gae/lW22aEwUE0IqGaYm5HRiMS8DwkDwsdjPpprEqYnBqo2s7gSR-JqcYOjU9LM6p32ujG_YAEd72aDyox-pdCVK10G-u1qZ3zAsn2r9?auto=format&dpr=1&w=3840'},
                {id: 7, name: 'mekaverse', floorPrice: '0.12', address: '0x9A534628B4062E123cE7Ee2222ec20B86e16Ca8F', preview: 'https://i.seadn.io/gae/SFCYIPlcznnwFnI8Jd0dYIh5Atr6cp7HL4tWVWUl7_Onikq7uzQxKfTjdK2ptilWALg1ZBttSvzhXBCUbB9qoSlW9kS8qk1S3Z3xkU0?auto=format&dpr=1&w=3840'},
                {id: 8, name: 'karafuru', floorPrice: '0.0764', address: '0xd2F668a8461D6761115dAF8Aeb3cDf5F40C532C6', preview: 'https://i.seadn.io/gae/VMG3VFncJG-pyqsRAwQznZGqYDw4RkPjJnJNJwrDERFhD4pWLh82q66JJ8Qh0vCPoovjoyigJwLqfFpa5tMAVV5ASIiR5nF1XkQFpec?auto=format&dpr=1&w=3840'},
                {id: 9, name: 'psychedelics-anonymous-genesis', floorPrice: '0.19', address: '0x75E95ba5997Eb235F40eCF8347cDb11F18ff640B', preview: 'https://i.seadn.io/gae/9VndAx-5SvVdamB8KvABGcw2bdXMdeyEYdhHJ22WMV98C2yS85SDT5rnBtT0zOxVjeJ6KBz2fXKXcYSIXeOc7aGiU4i0Rx9IwaMfO9o?auto=format&dpr=1&w=3840'},
                {id: 10, name: 'azuki', floorPrice: '3.9498', address: '0xED5AF388653567Af2F388E6224dC7C4b3241C544', preview: 'https://i.seadn.io/gae/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT?auto=format&dpr=1&w=3840'},
            ],
            selectedSort: '',
            sortOptions: [
                {value: 'name', name: 'title'},
                {value: 'floorPrice', name: 'floor price'}
            ]
        }
    },
    watch: {
        selectedSort(newValue) {
            this.collectionList.sort((collection1, collection2) => {
                return collection1[newValue]?.localeCompare(collection2[newValue])
            })
        }
    }
}
</script>
<style>
    .main-page{
        padding: 50px 200px;
    }

    .main-page h1, p{
        text-align: center;
        margin-bottom: 20px;
    }

    .filters {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
    }

    .vs-inputx {
        background-color: rgb(41, 41, 91);
    }

    .input-span-placeholder {
        color: white;
    }

    .collection-item{
        display: flex;
        align-items: center;
        background-color: #141417;
        margin-bottom: 4px;
        border-radius: 20px;
        padding: 10px 10px 10px 30px;
        cursor: pointer;
    }

    .collection-item:hover{
        background-color: #1e2023;
    }

    .collection-item__number{
        font-size: 16px;
        width: 40px;
    }

    .collection-item__name{
        font-size: 20px;
        margin-right: 10px;
    }

    .collection-item__preview{
        margin-right: 20px;
    }

    .collection-item__preview img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .collection-item__floorprice{
        margin-left: auto;
        margin-right: 20px;
    }
</style>