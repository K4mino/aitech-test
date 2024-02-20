import { createStore } from "vuex";
import { getData } from "@/utils";
import type { RootState,CompanyDataType,City } from "@/types";

export const store = createStore<RootState>({
    state: {
      cities:[],
      companyData:{}
    },
    mutations: {
        setCities(state:RootState,fetchedCities:City[]){
            state.cities = fetchedCities
        },
        setCompanyData(state:RootState,fetchedCompanyData:CompanyDataType){
            state.companyData = fetchedCompanyData
        }
    },
    actions: {
      async getCities(){
        const data = await getData('https://bitbucket.org/ilakhmotkin/front-end-assesment-ru/raw/7bc28b7ede222e25fe44fec52ad1e74a03168501/cities-response.json')
        store.commit('setCities',data.cities)
      },
      async getCompanyData(){
        const data = await getData('https://bitbucket.org/ilakhmotkin/front-end-assesment-ru/raw/09c0e12a2b5325e71f36c08e7e29dc8eefbdb081/company-response.json')
        store.commit('setCompanyData',data)
      }
    },
    getters:{
        
    }
  })