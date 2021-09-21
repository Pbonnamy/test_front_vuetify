<template>
    <v-card>
        <v-card-text>
            <v-form class="pa-5">
                <v-row>
                    <v-col cols="12">
                        <v-text-field label="Email"
                        v-model="email"
                        v-on:keyup.enter="onEnter"
                        :append-icon="'mdi-email'"></v-text-field>
                        <p class="red--text" v-if="errors && errors.email">{{ errors.email[0] }}</p>

                        <v-text-field label="Password"
                        v-on:keyup.enter="onEnter"
                        v-model="password"
                        :append-icon="show ?'mdi-eye':'mdi-eye-off'"
                        @click:append="() => (show = !show)"
                        :type="show ? 'text' : 'password'"></v-text-field>
                        <p class="red--text" v-if="errors && errors.password">{{ errors.password[0] }}</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12 mt-6">
                        <p class="red--text text-center" v-if="errors && errors.error">{{ errors.error }}</p>

                        <v-btn block color="success" @click="login" v-bind:loading="isLoading ? true : false ">
                        Login
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
  export default {
    data() {
        this.$store.commit('updtTitle', 'Login')
        return{
            show:false,
            errors: null,
            isLoading: false,
            email: '',
            password: ''
        }
    },

    methods: {
        onEnter: function() {
            this.login();
        },
        async login () {
            this.isLoading = true
            this.errors = null
            try {
                await this.$auth.loginWith("laravel", {
                    data: {
                        email: this.email,
                        password: this.password
                    }
                });
                this.$auth.isAuthenticated = true;
                this.$router.push('/profile')
                
            } catch (e) {
                this.isLoading = false
                this.errors = e.response.data
            }
        }
    }
  }
</script>