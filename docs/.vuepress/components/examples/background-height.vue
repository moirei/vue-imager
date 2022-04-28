<template>
  <v-container class="fill-height" fluid style="min-height: 434px">
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-imager
              tag="div"
              src="https://picsum.photos/350/165?random"
              height="125"
              class="grey darken-4"
            />
            <v-card-title class="text-h6"> height </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-imager
              tag="div"
              src="https://picsum.photos/350/165?random"
              height="125"
              contain
              class="grey darken-4"
            >
              <div>Content</div>
            </v-imager>
            <v-card-title class="text-h6"> height with contain </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-imager
              tag="div"
              src="https://picsum.photos/350/165?random"
              min-height="125"
              class="grey darken-4"
            >
              <div>Content</div>
            </v-imager>
            <v-card-title class="text-h6"> min-height </v-card-title>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-imager
              tag="div"
              src="https://picsum.photos/350/165?random"
              min-height="125"
              contain
              class="grey darken-4"
            >
              <div>Content</div>
            </v-imager>
            <v-card-title class="text-h6">
              min-height with contain
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>
</template>
