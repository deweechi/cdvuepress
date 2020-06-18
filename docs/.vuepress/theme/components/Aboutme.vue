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
                      <p>{{$page.frontmatter.about}}</p>
                    </div>
                  </v-flex>
                  <v-flex xs12 md5 class="mb-5">
                    <v-layout align-center>
                      <v-flex xs6 class="text-uppercase primary--text font-weight-medium">
                        <div class="mb-3">Location:</div>
                        <div class="mb-3">Email:</div>
                        <div class="mb-3">Phone:</div>
                        <div class="mb-3">LinkedIn:</div>
                        <div class="mb-3">Phone:</div>
                      </v-flex>
                      <v-flex xs6 class="subheading no-wrap">
                        <div class="mb-3">{{ $page.frontmatter.location }}</div>
                        <div class="mb-3">{{ $page.frontmatter.email }}</div>
                        <div class="mb-3">{{ $page.frontmatter.phone }}</div>
                        <div class="mb-3"><a :href="$page.frontmatter.linkedin">chipdeweese</a></div>
                        <div class="mb-3"><a :href="$page.frontmatter.github">deweechi</a></div>
                      </v-flex>
                    </v-layout>
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