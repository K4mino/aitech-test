<script setup lang="ts">
import Header from "./Header.vue"
import { onMounted, reactive,ref } from 'vue';
import type { CompanyDataType } from "@/types";
import { useStore } from 'vuex';


const store = useStore(); 
const company = reactive<CompanyDataType>({});
const date = ref();


const dateOptions = {
  timeZone: "Asia/Almaty",
  year: "numeric" as const,
  month: "long"  as const,
  day: "numeric"  as const,
  hour: "numeric"  as const,
  minute: "numeric"  as const,
  second: "numeric" as const,
  hour12: false,
};
onMounted(async () => {
    await store.dispatch('getCompanyData');
    Object.assign(company, store.state.companyData);
    const formatter =new Intl.DateTimeFormat("en-GB",dateOptions);

    date.value = formatter.format(new Date(company.status.today))
});
</script>

<template>
    <v-card v-if="company.name" width="800" class="mx-auto">
        <v-card-item>
            <Header :company="company.name"/>
        </v-card-item>
        <v-divider></v-divider>
        <v-card-text>
            <h2>Current date:{{ date }}</h2>
        </v-card-text>
        <v-card-text >
            <b>Total products:</b>{{ company.status.totalProducts }}
        </v-card-text>
        <v-card-text >
            <b>Available products:</b>{{ company.status.availableProducts }}
        </v-card-text>
        <v-card-text >
            <b>Not Available products:</b>{{ company.status.nonAvailableProducts }}
        </v-card-text>
    </v-card>
    <div v-else>Loading company data...</div>
</template>

<style>

</style>
