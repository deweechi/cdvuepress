<template>
  <v-container>
    <v-row no-gutters>
      <v-col class="fill-height" cols="12" sm="4">
        <span class="drkyellow">
          <p class="title text-center drkyellow">Training Topics:</p>
          <ul>
            <li v-for="train in $page.frontmatter.training" :key="train">{{train}}</li>
          </ul>
        </span>
      </v-col>
      <v-col class="fill-height" cols="12" sm="8">
        <span class="drkyellow">
          <p class="title text-center drkyellow">Upcoming Workshops:</p>
          <ul>
            <li
              v-for="events in $page.frontmatter.upcomingevents"
              :key="events"
            >{{events}}</li>
          </ul>
        </span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Trainevents"
};
</script>

<style scoped>
.drkyellow {
  color: #f4dea2;
}
</style>
