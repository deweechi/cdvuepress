<template>
  <v-app dark>
    <Navbar />
  

    
    <v-content>



      <v-container
        class="fill-height"
        fluid
      >
      <Hometop />
      <About />
      <Trainevents />
      <Pasttraining />
      <Trainlinks />
        
      </v-container>
    </v-content>
    <v-footer
      color="black"
      app
      
    >
      <span class="white--text">&copy; {{ $page.frontmatter.copy }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "@theme/components/Navbar";
import Hometop from "@theme/components/sample01/Hometop"
import About from "@theme/components/sample01/About"
import Trainevents from "@theme/components/sample01/Trainevents"
import Pasttraining from "@theme/components/sample01/Pasttraining"
import Trainlinks from "@theme/components/sample01/Trainlinks"
  export default {
    components: { Hometop, About, Trainevents, Pasttraining, Trainlinks, Navbar },
    props: {
      source: String,
    },
    data: () => ({
      drawer: false,
    }),
  }
</script>

<style scoped>
.homeText {
  color:#f4dea2
}
.homeBack {
color:#464d5d
}
.headText {
  background-color: black;
  color:#b79067;
  padding-left: 20px;
  padding-right:20px;
}
.menuIcon {
  background-color: black;
  padding-left: 20px;
}
</style>


