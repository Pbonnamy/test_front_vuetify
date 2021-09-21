<template>
    <v-row>
        <v-col v-for="(building,idx) in buildings" :key="idx" cols="6">
            <v-card elevation="7">
                <v-card-title >
                    <div><v-icon class="mr-2">mdi-office-building</v-icon>{{building.name}}</div>

                </v-card-title>
                <v-card-text>

                    <div class="mt-2"><p class="font-weight-bold mb-0">Address : </p>{{building.address}}</div>
                    <br>
                    <div class="mt-2"><span class="font-weight-bold">Code Soc : </span>{{building.code_soc}}</div>
                    <div class="mt-2"><span class="font-weight-bold">Code Im : </span> {{building.code_im}}</div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        buildings : ''
    }),
    mounted (){
        this.$axios.get('http://localhost:8000/api/immeuble/read')
        .then(response => { 
            this.buildings = response.data.immeubles;
        })
    },
}
</script>