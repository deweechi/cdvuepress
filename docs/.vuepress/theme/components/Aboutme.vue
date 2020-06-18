<template>
  <div
    id="about-me"
    class="layout wrap"
    :class=" this.$vuetify.breakpoint.name == 'xs' ? 'pa-3' : 'pa-5' "
    style="position: relative;"
  >
    <v-container class="d-flex xs12 md12">
      <v-row class="d-flex xs12 md7">
        <h2 class="display-2 font-weight-bold primary--text mb-4">Who am I?</h2>
        <v-layout justify-space-between wrap>
          <v-flex xs12 md7>
            <div class="subheading mb-5 mb-0 pa-3">
              <Content slot-key="aboutme" />
            </div>
          </v-flex>
          <v-flex xs12 md5 class="mb-5">
            <v-card>
              <v-list-item>
                <v-list-item-title class="text-uppercase primary--text font-weight-medium">Location:</v-list-item-title>
                <v-list-item-subtitle class="text-right">{{ $page.frontmatter.location }}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="text-uppercase primary--text font-weight-medium">Email:</v-list-item-title>
                <v-list-item-subtitle class="text-right">{{ $page.frontmatter.email }}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="text-uppercase primary--text font-weight-medium">Phone:</v-list-item-title>
                <v-list-item-subtitle class="text-right">{{ $page.frontmatter.phone }}</v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="text-uppercase primary--text font-weight-medium">LinkedIn:</v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  <a :href="$page.frontmatter.linkedin">chipdeweese</a>
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title class="text-uppercase primary--text font-weight-medium">Github:</v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  <a :href="$page.frontmatter.github">deweechi</a>
                </v-list-item-subtitle>
              </v-list-item>
            </v-card>
          </v-flex>
        </v-layout>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Aboutme"
};
</script>

<style scoped>
</style>