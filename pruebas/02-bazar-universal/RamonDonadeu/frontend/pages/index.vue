import { UButton } from '#ui-colors/components';
<template>
  <div
    class="flex flex-col items-center justify-center"
    style="height: 100%; width: 100%"
  >
    <main class="max-w-5xl w-full flex-col items-center flex m-auto">
      <h1 class="text-6xl font-normal">Bazar Online</h1>
      <UForm class="flex flex-col" :state="search">
        <UInput v-model="search.input" placeholer="Test"> </UInput>
        <UButton>Buscar</UButton>
      </UForm>
    </main>
  </div>
</template>
<script setup>
import { ref } from "vue";

const search = ref({
  input: "",
});
</script>
