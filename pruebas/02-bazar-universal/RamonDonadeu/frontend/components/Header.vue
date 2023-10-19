<template>
  <header class="flex flex-row justify-center items-center py-3">
    <div class="flex items-center w-full">
      <div class="px-5">O</div>
      <div class="flex items-center justify-center flex-grow text-center">
        <u-input
          class="max-w-xs w-full"
          icon="i-heroicons-magnifying-glass-20-solid"
          v-model="search"
          placeholder="Tablet, iPhone, Crema..."
        ></u-input>
      </div>
    </div>
  </header>
</template>
<script setup>
const search = ref("");

// On mount search to be search from query
const route = useRoute();

onMounted(() => {
  search.value = route.query.search || "";
});
</script>
<style>
header {
  gap: 1rem;
  width: 100%;
}
</style>
