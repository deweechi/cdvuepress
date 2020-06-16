<template>
  <div>
    <v-timeline align-top :dense="this.$vuetify.breakpoint.mdAndDown">
      <v-timeline-item
        v-for="item in $page.frontmatter.experience"
        :key="item.id"
        :color="item.color"
        :icon="item.icon || ''"
        fill-dot
      >
      <span slot="opposite">{{item.year}}</span>
        <v-card :color="item.color" dark>
          <v-card-title class="title">{{item.company}}</v-card-title>
          <v-card-subtitle>{{item.title}}</v-card-subtitle>
          <v-card-text class="white black--text">
            <p class="pa-3">{{item.summary}}</p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  name: "Timeline"
};
</script>