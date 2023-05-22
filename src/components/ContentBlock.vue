<template>
  <v-container>
    <v-row align="center" justify="center" class="ma-4">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>

      <FilterSelectors />

      <v-col cols="12" md="4" style="align-self: flex-start;">
        <v-card max-width="450" min-height="165" class="mx-auto">
          <UsersList :users="filtredUsers" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import FilterSelectors from "./FilterSelectors.vue";
import UsersList from "./UsersList.vue";
export default {
  name: "ContentBlock",
  components: { FilterSelectors, UsersList },

  data: () => ({}),
  methods: mapActions(["fetchUsers"]),
  async mounted() {
    this.fetchUsers();
  },
  computed: mapGetters(["filtredUsers"]),
};
</script>
