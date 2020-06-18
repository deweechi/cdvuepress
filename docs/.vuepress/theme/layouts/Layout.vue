<template>
  <v-app dark>
    <v-navigation-drawer fixed app>
      <v-layout justify-center align-center wrap column>
        <v-avatar size="128">
          <img :src="$withBase('imgs/profile.jpg')" alt="Chip DeWeese" />
        </v-avatar>

        <h1 class="display-1 ma-2">{{ $page.frontmatter.name }}</h1>
        <span
          class="display-1 mb-5 deep-purple--text font-weight-bold title"
        >{{ $page.frontmatter.occupation }}</span>
        <div class="ma-2">
          <v-btn
            @click="scroll('about-me')"
            class="text-capitalize subheading font-weight-light"
            text
          >About Me</v-btn>
        </div>
        <div class="ma-2">
          <v-btn
            @click="scroll('about-site')"
            class="text-capitalize subheading font-weight-light"
            text
          >About this Site</v-btn>
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
        <Aboutme />
        <Aboutsite />
        <Skills />
        <Timeline />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Timeline from "@theme/components/Timeline";
import Hero from "@theme/components/Hero";
import Aboutme from "@theme/components/Aboutme";
import Aboutsite from "@theme/components/Aboutsite";
import Skills from "@theme/components/Skills";
export default {
  components: { Timeline, Hero, Aboutme, Aboutsite, Skills },

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

