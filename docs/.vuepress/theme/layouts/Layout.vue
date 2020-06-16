<template>
  <v-app dark>
    <v-navigation-drawer fixed app>
      <v-layout justify-center align-center wrap column>
        <v-avatar size="128">
          <img :src="$withBase('imgs/profile.jpg')" alt="Chip DeWeese">
        </v-avatar>
        
       
        <h1 class="display-1 ma-2">{{ $page.frontmatter.name }}</h1>
        <span class="display-1 mb-5 deep-purple--text font-weight-bold title">{{ $page.frontmatter.occupation }}</span>
        <div class="ma-2">
          <v-btn
            @click="scroll('about-me')"
            class="text-capitalize subheading font-weight-light"
            text
          >About Me</v-btn>
        </div>
        <div class="ma-2">
          <v-btn @click="scroll('about-site')" class="text-capitalize subheading font-weight-light" text>About this Site</v-btn>
        </div>
        <div class="ma-2">
          <v-btn
            @click="scroll('skills')"
            class="text-capitalize subheading font-weight-light"
            text
          >Skills & Education</v-btn>
        </div>
        <div class="ma-2">
          <v-btn
            @click="scroll('timeline')"
            class="text-capitalize subheading font-weight-light"
            text
          >Experience</v-btn>
        </div>
        <div class="ma-2">
          <v-btn
            @click="scroll('about-me')"
            class="text-capitalize subheading font-weight-light"
            text
          >Contact</v-btn>
        </div>
        
      </v-layout>
    </v-navigation-drawer>
    <v-main class="hide-overflow">
      <div>

        <Hero />




        <v-container fluid class="py-5 px-0">
          <div
            id="about-me"
            class="layout wrap"
            :class=" this.$vuetify.breakpoint.name == 'xs' ? 'pa-3' : 'pa-5' "
            style="position: relative;"
          >
            <v-container class="d-flex xs12 md12">
              <v-row class="d-flex xs12 md7">
                <h2 class="display-2 font-weight-bold primary--text mb-4">Who I am?</h2>
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
                    <v-layout align-center>
                      <v-flex xs6 class="text-uppercase primary--text font-weight-medium">
                        <div class="mb-3">JS Framework:</div>
                        <div class="mb-3">CSS Framework:</div>
                        <div class="mb-3">Hero Image:</div>
                      </v-flex>
                      <v-flex xs6 class="subheading no-wrap">
                        <div class="mb-3">{{ $page.frontmatter.sitetech[0].vue }}</div>
                        <div class="mb-3">{{ $page.frontmatter.sitetech[1].vuetify }}</div>
                        <div class="mb-3">{{ $page.frontmatter.sitetech[2].unsplash }}</div>
                      </v-flex>
                    </v-layout>
                  </v-flex>
                  <v-flex xs12 md7>
                    <div class="subheading mb-5 mb-0 pa-3">
                      <p>{{$page.frontmatter.thissite}}</p>
                      <div></div>
                    </div>
                  </v-flex>
                </v-layout>
              </v-row>
            </v-container>
          </div>

          <v-container class="py-5 px-0">
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
                  <v-col
                    v-for="education in $page.frontmatter.education"
                    :key="education.school"
                    cols="6"
                    >
                    <div class="text-center">
                      <v-card class="pa-2" tile outlined min-width="100">
                      <span class="text-h5">
                          {{education.school}}
                          </span>
                          <br />
                    <span class="text-subtitle">
                          
                          {{education.degree}}
                        </span>
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
          </v-container>
        </v-container>

<div id="timeline">
<Timeline />
</div>




      </div>
    </v-main>
  </v-app>
</template>

<script>
import Timeline from '@theme/components/Timeline'
import Hero from '@theme/components/Hero'
export default {
  components: {Timeline, Hero},
  props: {
    source: String
  },
  data: () => ({
    drawer: false
  }),

  methods: {
    scroll(id) {
      document.getElementById(id).scrollIntoView({
        behavior: "smooth"
      });
    }
    
  }
};
</script>

<style scoped>

</style>

