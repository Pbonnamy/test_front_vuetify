<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list v-if="!this.$auth.loggedIn">
        <v-list-item :to="'/'">
          <v-list-item-action>
            <v-icon>mdi-login</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title  v-text="'Login'"/>
          </v-list-item-content>
        </v-list-item>

        <v-list-item :to="'/register'">
          <v-list-item-action>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title  v-text="'Register'"/>
          </v-list-item-content>
        </v-list-item>

      </v-list>
      
      <v-list v-else>
         <v-list-item :to="'/profile'">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title  v-text="'Profile'"/>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="'/buildings'" >
          <v-list-item-action>
            <v-icon>mdi-city</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title  v-text="'Buildings'"/>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="'/mybuilding'" >
          <v-list-item-action>
            <v-icon>mdi-office-building</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title  v-text="'My Building'"/>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="logout" >
          <v-list-item-action>
            <v-icon>mdi-close-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title  v-text="'Logout'"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container fill-height>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} - Front Pierre</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title : 'Front'
    }
  },
  methods: {
    async logout() {
      await this.$auth.logout()
        this.$router.push('/')
    }
  }
}
</script>
