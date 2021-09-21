<template>
    <div class="justify-center">
        <v-row>
            <v-select v-if="loaded" v-model="currentItem" :items="select" @change="onChange($event)" item-text="text" item-value="value" class="mt-6"
           label="Select account"></v-select>
        </v-row>
        <v-row>
            <v-col>
                <v-card elevation="7" class="mt-6 justify-space-between" v-if="showBuild">
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
            showBuild: false,
            items: [],
            address: ' ',
            codeSoc: ' ',
            codeIm: ' ',
            name: ' ',
            currentItem: ''
        }
    },
    methods: {
        onChange(event) {
            let i;
            for (i = 0; i < this.items.length; i++) {
                if(this.items[i].id==event){
                    break;
                }
            }
            this.showBuild = true;
            this.name = this.items[i].name;
            this.address = this.items[i].address;
            this.codeSoc = this.items[i].code_soc;
            this.codeIm = this.items[i].code_im;
            this.$auth.$storage.setLocalStorage('selected', event);
        }
    },
    mounted (){
        this.$axios.get('http://localhost:8000/api/user/'+this.$store.getters.loggedUser.id+'/accounts')
        .then(response => { 

            let result = response.data.accounts;

            for (let i = 0; i < result.length; i++) {

                this.select.push({
                    text: result[i].content,
                    value: result[i].id,
                });
                
            }

            this.items = result;

            this.currentItem = this.$auth.$storage.getLocalStorage('selected');
            this.onChange(this.currentItem);

            this.loaded =true;

        })

        
    },
}
</script>