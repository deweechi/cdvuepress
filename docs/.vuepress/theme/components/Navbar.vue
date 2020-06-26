<template>

  <v-app-bar
      app
      dense
      dark      
    >
  
      <v-btn href="/"><v-icon>home</v-icon>
      </v-btn>
        <v-toolbar-title class="headText">{{ $page.frontmatter.title }}</v-toolbar-title>
      <v-spacer />
 <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Menu
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click=""
          :href="item.link"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>





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
    drawer: false,
    items: [
        { title: 'Home',
          link:'/' },
        { title: 'Sample WebPage',
          link:'/sample01' },
  
      ],
  }),
  methods: {
    
  }




};
</script>

<style scoped>
</style>