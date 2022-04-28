<template>
  <div class="pa-1">
    <v-row>
      <v-col v-for="n in 9" :key="n">
        <v-card height="200" width="200">
          <v-imager
            :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            width="100%"
            height="100%"
            lazy
          />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
