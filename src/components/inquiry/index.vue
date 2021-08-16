<template lang='html'>
    <b-container fluid >
        <b-row>
            <b-col md="2">
                <b-form-select v-model="selected" :options="options"></b-form-select>
            </b-col>
        </b-row>
        <hr />
        <b-row>
            <b-col md="12" lg="12">
                <b-table  id="inquiry-list" striped hover 
                :items="items" 
                :fields="fields" 
                :busy="isBusy" 
                @row-clicked="RowHandler" class="mb-4" 
                :per-page="perPage" 
                :current-page="currentPage">

                    <template #table-busy>
                        <div class="text-center text-primary my-2">
                        <b-spinner class="align-middle"></b-spinner>
                            <strong>Loading...</strong>
                        </div>
                    </template>
                    
                </b-table>
            </b-col>
        </b-row>
        
        <b-pagination
            aria-controls="inquiry-list"
            v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
            first-text="First"
            prev-text="Prev"
            next-text="Next"
            last-text="Last"
        ></b-pagination>

    </b-container>
</template>

<script lang='js'>

import modal from './modal'

export default {
    components: { modal },
    data() {
        return {
            perPage: 15,
            currentPage: 1,
            isOpen: false,
            isBusy: false,
            fields: ['first_name', 'last_name', 'age' , 'gender' , 'site'],
            items: [
                { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' ,'gender' : 'M' , site: 'google.com'},
                { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw','gender' : 'F',site: 'google.com'},
                { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson','gender' : 'F' ,site: 'google.com'},
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney','gender' : 'M' ,site: 'google.com'},
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney','gender' : 'M' ,site: 'google.com'},
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney','gender' : 'M' ,site: 'google.com'},
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney','gender' : 'M' ,site: 'google.com'},
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney','gender' : 'M' ,site: 'google.com'},
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney','gender' : 'M' ,site: 'google.com'},
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney','gender' : 'M' ,site: 'google.com'},
                { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' ,'gender' : 'M' , site: 'google.com'},
                { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw','gender' : 'F',site: 'google.com'},
                { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson','gender' : 'F' ,site: 'google.com'},
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney','gender' : 'M' ,site: 'google.com'},
                { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' ,'gender' : 'M' , site: 'google.com'},
                { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw','gender' : 'F',site: 'google.com'},
                { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson','gender' : 'F' ,site: 'google.com'},
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney','gender' : 'M' ,site: 'google.com'},
                { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' ,'gender' : 'M' , site: 'google.com'},
                { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw','gender' : 'F',site: 'google.com'},
                { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson','gender' : 'F' ,site: 'google.com'},
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney','gender' : 'M' ,site: 'google.com'},
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney','gender' : 'M' ,site: 'google.com'},
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney','gender' : 'M' ,site: 'google.com'},
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney','gender' : 'M' ,site: 'google.com'},
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney','gender' : 'M' ,site: 'google.com'},
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney','gender' : 'M' ,site: 'google.com'},
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney','gender' : 'M' ,site: 'google.com'},
                { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' ,'gender' : 'M' , site: 'google.com'},
                { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw','gender' : 'F',site: 'google.com'},
                { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson','gender' : 'F' ,site: 'google.com'},
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney','gender' : 'M' ,site: 'google.com'},
                { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' ,'gender' : 'M' , site: 'google.com'},
                { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw','gender' : 'F',site: 'google.com'},
                { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson','gender' : 'F' ,site: 'google.com'},
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney','gender' : 'M' ,site: 'google.com'},
            ],
            selected: null,
            options: [
                { value: null, text: 'Please select an category' },
                { value: 1, text: 'First Category' },
                { value: 2, text: 'Second Category' },
                { value: 3, text: 'Third Category' },
                { value: 4, text: 'Fourth Category'}
            ]
        }
    },
    computed:{
        totalRows(){
            return this.items.length;
        }
    },
    methods: {
        RowHandler( record , index ) {
           alert( record )
        }
    }
}
</script>

<style scoped lang='scss'>
</style>
