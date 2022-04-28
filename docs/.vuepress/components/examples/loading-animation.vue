<template>
  <div class="pa-1">
    <v-row>
      <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="6" md="4">
        <v-card height="200" width="200">
          <v-imager
            tag="div"
            :src="`https://picsum.photos/500/300?image=${n * 5 + 20}`"
            :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
            width="100%"
            height="100%"
            lazy
          >
            <template #default="{ loading }">
              <v-overlay absolute :value="loading">
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-row>
              </v-overlay>
            </template>
          </v-imager>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
