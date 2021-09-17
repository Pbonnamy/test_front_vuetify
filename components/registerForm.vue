<template>
    <v-card>
        <v-card-text>
            <v-form class="pa-5">
                <v-row>
                    <v-col cols="12">
                        <v-text-field label="Name" :rules="nameRule"
                        :append-icon="'mdi-account'"></v-text-field>

                        <v-text-field label="Email" :rules="emailRule"
                        :append-icon="'mdi-email'"></v-text-field>

                        <v-text-field label="Password" :rules="pwdRule" 
                        :append-icon="show ?'mdi-eye':'mdi-eye-off'"
                        @click:append="() => (show = !show)"
                        :type="show ? 'text' : 'password'"></v-text-field>

                        <v-text-field label="Phone" :rules="phoneRule"
                        :append-icon="'mdi-cellphone'"></v-text-field>

                        <v-text-field label="Address" :rules="addressRule"
                        :append-icon="'mdi-city'"></v-text-field>

                        <v-text-field label="City" :rules="cityRule"
                        :append-icon="'mdi-map-marker'"></v-text-field>

                        <v-text-field label="Zipcode" :rules="zipRule"
                        :append-icon="'mdi-map-marker'"></v-text-field>

                        <v-text-field label="Country" :rules="countryRule"
                        :append-icon="'mdi-map-marker'"></v-text-field>

                        <v-textarea label="Bio" :rules="bioRule"
                        :append-icon="'mdi-text-account'"></v-textarea>

                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12 mt-6">
                        <v-btn block color="success">
                            Register
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
  export default {
    data: () => ({
      pwdRule: [
        v => !!v || 'Password is required',
      ],
      nameRule: [
        v => !!v || 'Name is required',
      ],
      emailRule: [
        v => !!v || 'E-mail is required',
      ],
      countryRule: [
        v => !!v || 'Country is required',
      ],
      cityRule: [
        v => !!v || 'City is required',
      ],
      addressRule: [
        v => !!v || 'Address is required',
      ],
      zipRule: [
        v => !!v || 'Zipcode is required',
      ],
      phoneRule: [
        v => !!v || 'Phone number is required',
      ],
      bioRule: [
        v => !!v || 'Bio is required',
      ],
      show:false,
    }),
  }
</script>