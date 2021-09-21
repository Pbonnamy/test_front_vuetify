<template>
    <v-card>
        <v-card-text>
            <v-form class="pa-5">
                <v-row>
                    <v-col cols="12">
                        <v-text-field label="Name" v-model="name"
                        :append-icon="'mdi-account'"></v-text-field>
                        <p class="red--text" v-if="errors && errors.name">{{ errors.name[0] }}</p>

                        <v-text-field label="Email" v-model="email"
                        :append-icon="'mdi-email'"></v-text-field>
                        <p class="red--text" v-if="errors && errors.email">{{ errors.email[0] }}</p>

                        <v-text-field label="Password" v-model="password"
                        :append-icon="show ?'mdi-eye':'mdi-eye-off'"
                        @click:append="() => (show = !show)"
                        :type="show ? 'text' : 'password'"></v-text-field>
                        <p class="red--text" v-if="errors && errors.password">{{ errors.password[0] }}</p>

                        <v-text-field label="Phone" v-model="phone"
                        :append-icon="'mdi-cellphone'"></v-text-field>
                        <p class="red--text" v-if="errors && errors.phone">{{ errors.phone[0] }}</p>

                        <v-text-field label="Address" v-model="address"
                        :append-icon="'mdi-city'"></v-text-field>
                        <p class="red--text" v-if="errors && errors.address">{{ errors.address[0] }}</p>

                        <v-text-field label="City" v-model="city"
                        :append-icon="'mdi-map-marker'"></v-text-field>
                        <p class="red--text" v-if="errors && errors.city">{{ errors.city[0] }}</p>

                        <v-text-field label="Zipcode" v-model="zip"
                        :append-icon="'mdi-map-marker'"></v-text-field>
                        <p class="red--text" v-if="errors && errors.zipcode">{{ errors.zipcode[0] }}</p>

                        <v-text-field label="Country" v-model="country"
                        :append-icon="'mdi-map-marker'"></v-text-field>
                        <p class="red--text" v-if="errors && errors.country">{{ errors.country[0] }}</p>

                        <v-textarea label="Bio" v-model="bio"
                        :append-icon="'mdi-text-account'"></v-textarea>
                        <p class="red--text" v-if="errors && errors.bio">{{ errors.bio[0] }}</p>

                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12 mt-6">
                        <v-btn block color="success" @click="update" v-bind:loading="isLoading ? true : false ">
                        Update
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>

        <v-snackbar
        v-model="snackbar"
        :timeout="timeout"
        color="green">
        {{ text }}
        </v-snackbar>

    </v-card>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        data(){
            this.$store.commit('updtTitle', 'Profile')
            let user = this.$store.getters.loggedUser;
            return{
                name: user.name,
                email: user.email,
                password : '',
                phone: user.phone,
                address: user.address,
                city: user.city,
                zip: user.zipcode,
                country: user.country,
                bio: user.bio,
                show:false,
                errors: null,
                isLoading: false,
                snackbar: false,
                text: 'Profil modifié',
                timeout: 2000,
            }
        },

        methods: {
            async update () {
                this.isLoading = true
                this.errors = null
                
                let axiosConfig = {headers: {'Content-Type': 'application/json'}};
                let axiosData = 
                JSON.stringify({
                    name: this.name,
                    email: this.email,
                    password : this.password,
                    phone: this.phone,
                    address: this.address,
                    city: this.city,
                    zipcode: this.zip,
                    country: this.country,
                    bio: this.bio,
                });

                await 
                this.$axios.patch('http://localhost:8000/api/user/'+this.$store.getters.loggedUser.id, axiosData, axiosConfig)
                .then(response => {
                    this.snackbar = true;
                })
                .catch(error => {
                    this.errors = error.response.data;
                });
                this.isLoading = false;
            }
        },
    }
</script>