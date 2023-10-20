<template>
  <q-page class="column items-center justify-center align-center">
    <q-icon name="fa-solid fa-flag" color="primary" size="10rem"><i class="fa-solid fa-store"></i></q-icon>
    <h1 class="bold text-primary text-center q-my-xl">Bazar Online</h1>
      <q-form class="column justify-center" @submit="$router.push('items?search='+search)" style="min-width: 300px;" >
        <q-input v-model="search" class="tx-white q-pb-md"         label-color="white"
        outlined
      rounded
      placeholder="Smartphone, Tablet, Crema..."></q-input>
      <q-btn type="submit" color="dark" text-color="white" rounded filled unelevated label="Buscar" @click="$router.push"></q-btn>
    </q-form>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const search = ref<string>('')
    return { search }
  }
})
</script>
<style scoped>
</style>
