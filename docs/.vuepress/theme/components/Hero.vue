<template>
  <v-container fluid fill-height class="home-hero">
    <v-layout justify-end align-end column pa-5>
      <div
        class="font-weight-black white--text text-xs-right"
        :class=" this.$vuetify.breakpoint.name == 'xs' ? 'display-4' : 'display-1' "
      >{{ $page.frontmatter.name }}</div>
      <div
        class="display-4 font-weight-black primary--text text-xs-right mb-3"
        :class=" this.$vuetify.breakpoint.name == 'xs' ? 'display-4' : 'display-1' "
      >{{ $page.frontmatter.occupation }}</div>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: "Hero"
};
</script>

<style scoped>
.home-hero {
  background: url("/imgs/hero.png");
  background-size: cover;
  height: 100vh;
}
</style>