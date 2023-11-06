<template>
    <div class="select">
        <select name="" id="" @change="changeOptions">
            <option disabled value="">Выберите что-нибудь из списка</option>
            <option :value="option.value" v-for="option in options" :key="option.value">{{ option.name }}</option>
        </select>
    </div>
</template>
<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOptions(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>
<style>
select {
    color: white;
    border: none;
    background-color: rgb(74, 38, 68);
    border: 1px solid rgb(74, 38, 68);
    cursor: pointer;
    padding: 7px;
    border-radius: 5px;
}

option {
    border: none;
}
</style>