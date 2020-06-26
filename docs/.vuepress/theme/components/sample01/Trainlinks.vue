<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="12">
        <p class="title text-center drkyellow">Shots from previous workshops:</p>
      </v-col>
    </v-row>
    <v-row  align="center"
            justify="center" no-gutters>
      <v-col cols="12" sm="12">
      <v-carousel cycle>
        <v-carousel-item
      v-for="img in $page.frontmatter.carousel"
      :key="img"
      :src="img"
      contain
    ></v-carousel-item>
      </v-carousel>  
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Trainlinks"
};
</script>

<style scoped>
.drkyellow {
  color: #f4dea2;
}
</style>
