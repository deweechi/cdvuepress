<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="2">
        <v-card min-height="250" tile>
          <v-img contain  :src="$withBase('imgs/sample_left.png')" height="250"></v-img>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8">
        <v-card class="pa-2" min-height="250" tile>
          <v-card-text>
            <p class="title text-center drkyellow">{{ $page.frontmatter.tagline }}</p>
          </v-card-text>
          <v-divider class="indigo accent-4" />
          <v-card-text>
            <span class="drkyellow">
              {{ $page.frontmatter.about }}
            </span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="2">
        <v-card min-height="250" tile>
          <v-img  :src="$withBase('imgs/sample_right.png')" contain height="250"></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Hometop"
  
};
</script>

<style scoped>
.drkyellow {
  color: #f4dea2;
}
</style>

