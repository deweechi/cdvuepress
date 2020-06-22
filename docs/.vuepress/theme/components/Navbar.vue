<template>

  <v-app-bar
      app
      dense
      dark      
    >
  
      <v-toolbar-title class="headText">{{ $page.frontmatter.title }}</v-toolbar-title>
      <v-spacer />
      <v-btn href='tel:14844027321' class="mx-2" fab small dark color="black"><v-icon>phone</v-icon></v-btn>
      <v-btn href='mailto:chip.deweese@gmail.com' class="mx-2" dark color="black" fab small><v-icon>email</v-icon>
      </v-btn>
      <v-btn href='https://www.linkedin.com/in/chipdeweese/' class="mx-2" fab dark small color="black"><v-icon>fab fa-linkedin</v-icon></v-btn>
      <v-btn href='https://github.com/deweechi' class="mx-2" fab dark small color="black"><v-icon>fab fa-github</v-icon></v-btn>
    </v-app-bar>
  
  
</template>

<script>
export default {
  
  
  name: "Navbar",
  props: [],
  data: () => ({
    drawer: false
  }),
  methods: {
    
  }




};
</script>

<style scoped>
</style>