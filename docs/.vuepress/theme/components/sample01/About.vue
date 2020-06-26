<template>
  <v-container>
    <v-row no-gutters>
      <v-col class="fill-height" cols="12" sm="4">
        <v-card min-height="250" dark>
          <v-img contain :src="$withBase('imgs/sample_profile.png')" height="250"></v-img>
          <v-card-text><span class="white--text">{{ $page.frontmatter.qoute }}</span>
          </v-card-text><v-card-text><p class="text-right green--text">{{ $page.frontmatter.qouteby }}</p></v-card-text>
        </v-card>
      </v-col>
      <v-col class="fill-height" cols="12" sm="8">
        
          
            <p class="title text-center drkyellow">{{ $page.frontmatter.abouttitle}}</p>
          
          
          
            <span class="drkyellow">
              <Content class="pa-2" />
            </span>
          
      </v-col>      
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.drkyellow {
  color: #f4dea2;
}

</style>
