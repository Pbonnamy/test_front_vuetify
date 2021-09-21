<template>
    <div class="justify-center">
        <v-row>
            <v-select v-if="loaded" :items="select" @change="onChange($event)" item-text="text" item-value="value"
           label="Account"></v-select>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="7" class="mt-6 justify-space-between">
                <v-card-title >
                    <div><v-icon class="mr-2">mdi-office-building</v-icon>{{name}}</div>

                </v-card-title>
                <v-card-text class="d-flex justify-space-between">

                    <div class="mt-2 "><p class="font-weight-bold mb-0">Address : </p>{{address}}</div>
                    <div class="mt-2 "><p class="font-weight-bold mb-0">Code Soc : </p>{{codeSoc}}</div>
                    <div class="mt-2 "><p class="font-weight-bold mb-0">Code Im : </p>{{codeIm}}</div>
                </v-card-text>
            </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            select: [],
            loaded: false,
            items: [],
            address: ' ',
            codeSoc: ' ',
            codeIm: ' ',
            name: ' '
        }
    },
    methods: {
        onChange(event) {
            this.name = this.items[event].name;
            this.address = this.items[event].address;
            this.codeSoc = this.items[event].code_soc;
            this.codeIm = this.items[event].code_im;
        }
    },
    mounted (){
        this.$axios.get('http://localhost:8000/api/user/'+this.$store.getters.loggedUser.id+'/accounts')
        .then(response => { 

            let result = response.data.accounts;

            for (let i = 0; i < result.length; i++) {

                this.select.push({
                    text: result[i].content,
                    value: i,
                });
                
            }
            this.loaded =true;
            
            this.items = result;
        })
    },
}
</script>