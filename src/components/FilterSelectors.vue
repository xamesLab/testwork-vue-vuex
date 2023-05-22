<template>
  <v-col cols="12" md="4" style="align-self: flex-start;">
    <v-select
      item-value="filterVariant.country"
      :items="items.country"
      clearable
      label="Filter by country"
      @change="
        (e) => {
          setCountryVariant(e);
        }
      "
    ></v-select>

    <v-select
      item-value="filterVariant.score"
      :items="items.score"
      clearable
      label="Filter by score"
      @change="
        (e) => {
          setScoreVariant(e);
        }
      "
    ></v-select>
  </v-col>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "FilterSelectors",

  data: () => ({
    items: {
      country: ["russia", "usa"],
      score: ["> 20", "< 10"],
    },
  }),
  computed: mapState(["filterVariant"]),
  methods: mapMutations(["setCountryVariant", "setScoreVariant"]),
};
</script>
