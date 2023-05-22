<template>
  <v-list-item>
    <v-list-item-avatar @click="show = !show" style="cursor: pointer;">
      <v-img :src="item.avatar"></v-img>
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title v-html="item.title"></v-list-item-title>
      <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
      <span>address: {{ show ? `${item.country} ${item.address}` : "" }}</span>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: "UserCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    show: false,
  }),
};
</script>
