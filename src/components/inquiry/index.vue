<template lang='html'>
    <div>
        <b-table striped hover :items="items" :fields="fields" :busy="isBusy" @row-clicked="RowHandler">
            <template #table-busy>
                <div class="text-center text-primary my-2">
                <b-spinner class="align-middle"></b-spinner>
                    <strong>Loading...</strong>
                </div>
            </template>
        </b-table>
    </div>
</template>

<script lang='js'>

import modal from './modal'

export default {
    components: { modal },
    data() {
        return {
            isOpen: false,
            isBusy: false,
            fields: ['first_name', 'last_name', 'age' , 'gender' , 'site'],
            items: [
                { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' ,'gender' : 'M' , site: 'google.com'},
                { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw','gender' : 'F',site: 'google.com'},
                { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson','gender' : 'F' ,site: 'google.com'},
                { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney','gender' : 'M' ,site: 'google.com'}
            ]
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
