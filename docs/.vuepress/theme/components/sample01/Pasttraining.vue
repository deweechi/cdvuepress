<template>
  <v-container>
    <v-row no-gutters>
      <v-col class="fill-height" cols="12" sm="12">
        <span class="drkyellow">
          <p class="title text-center drkyellow">Past Workshop Locations:</p>
        </span>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <span class="drkyellow">
          <ul>
            <li v-for="event in $page.frontmatter.pastevents" :key="event">{{event}}</li>
          </ul>
          <p class="text-center drkyellow"></p>
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Pasttraining",
    
};
</script>

<style scoped>
.drkyellow {
  color: #f4dea2;
}

ul {
  columns: 3;
  -webkit-columns: 2;
  -moz-columns: 2;
}

</style>
