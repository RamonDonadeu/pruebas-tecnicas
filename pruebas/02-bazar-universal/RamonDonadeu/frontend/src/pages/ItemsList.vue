<template><q-page>
    <q-list class="row flex-wrap">
        <q-card v-for="item in itemsList" :key="item.id" class="row">
           <img :src="item.thumbnail" class="q-pa-md" />
            <q-card-section class="column">
                <div>{{ item.title }}</div>
                <div>{{ item.description }}</div>
                <div class="row">
                <div>{{ item.price }}</div>
                <div>{{item.rating}}</div></div>
            </q-card-section>
        </q-card>
    </q-list>
</q-page></template>

<script lang="ts" setup>
import axios from 'axios'
import { Item } from './Item'
import { onMounted, ref } from 'vue'
import apiURLS from 'src/config/apiURLS'
import { useRoute } from 'vue-router'

const itemsList = ref<Item[]>([])
const route = useRoute()

onMounted(() => {
  axios(apiURLS.backend + '/item?search=' + route.query.search).then((response) => {
    itemsList.value = response.data
  })
})

</script>
