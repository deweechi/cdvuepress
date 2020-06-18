<template>
  <div
    id="about-site"
    class="layout wrap"
    :class=" this.$vuetify.breakpoint.name == 'xs' ? 'pa-3' : 'pa-5' "
    style="position: relative;"
  >
    <v-container class="d-flex xs12 md12">
      <v-row class="d-flex xs12 md7 align-end flex-column pa-3">
        <p class="display-2 font-weight-bold primary--text mb-4">This site?</p>
        <v-layout justify-space-between wrap>
          <v-flex xs12 md5 class="mb-5">
            <v-card>
              <v-list-item v-for="item in $page.frontmatter.sitetech" :key="item.name">
                <v-list-item-title
                  class="text-uppercase primary--text font-weight-medium"
                >{{item.name}}</v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  <a v-if="item.link" :href="item.target">{{ item.value }}</a>
                  <span v-else>{{ item.value }}</span>
                </v-list-item-subtitle>
              </v-list-item>
            </v-card>
          </v-flex>
          <v-flex xs12 md7>
            <div class="subheading mb-5 mb-0 pa-3">
              <Content slot-key="aboutsite" />
              <div></div>
            </div>
          </v-flex>
        </v-layout>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Aboutsite"
};
</script>

<style scoped>
</style>