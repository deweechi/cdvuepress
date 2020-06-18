<template>
  <div
    id="skills"
    class="layout wrap"
    :class=" this.$vuetify.breakpoint.name == 'xs' ? 'pa-3' : 'pa-5' "
    style="position: relative;"
  >
    <v-container>
      <v-row justify="center">
        <p class="display-2 font-weight-bold flex-column primary--text mb-4">Education:</p>
      </v-row>
      <v-row>
        <v-col v-for="education in $page.frontmatter.education" :key="education.school" cols="6">
          <div class="text-center">
            <v-card class="pa-2" tile outlined min-width="100">
              <span class="text-h5">{{education.school}}</span>
              <br />
              <span class="text-subtitle">{{education.degree}}</span>
            </v-card>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <p class="display-2 font-weight-bold flex-column primary--text mb-4">Skills:</p>
      </v-row>
      <v-row>
        <v-col
          v-for="skill in $page.frontmatter.skills"
          :key="skill.name"
          cols="4"
          xs="4"
          sm="4"
          md="2"
          lg="2"
        >
          <div class="text-center">
            <v-card class="pa-2" tile outlined min-width="100">
              <v-progress-circular
                :size="100"
                :rotate="-90"
                :width="10"
                :value="skill.level"
                color="deep-purple lighten-2"
              >
                {{skill.name}}
                <br />
                {{skill.level}}%
              </v-progress-circular>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Skills"
};
</script>

<style scoped>
</style>