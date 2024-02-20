<script setup lang="ts">
import { ref,onMounted } from 'vue';
import { useStore } from 'vuex'

const store = useStore()
const selectedCity = ref('Almaty');
const cities = ref([])
onMounted(async () => {
  await store.dispatch('getCities');
  cities.value = store.state.cities;
});
</script>

<template>
    <div class="dropdown">
    <v-select
      v-model="selectedCity"
      :items="cities"
      item-title="name"
      item-value="code"
      label="City"
    ></v-select>
    </div>
</template>

<style>
    .dropdown{
        padding: 8px;
        border-radius: 8px;
        width: 220px;
    }
</style>
