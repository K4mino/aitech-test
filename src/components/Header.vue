<script setup lang="ts">
import Dropdown from './Dropdown.vue';

const props = defineProps<{company:string}>()

</script>

<template>
    <div class="header">
        <h1>Company name: {{ props.company }}</h1>
        <Dropdown/>
    </div>
</template>

<style>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>