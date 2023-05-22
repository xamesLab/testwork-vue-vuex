<template>
  <v-list three-line>
    <div v-for="(item, index) in users" :key="item.title">
      <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
      <UserCard :item="item" v-else />
      <v-divider v-if="lastIndex !== index || lastIndex === 0" :inset="!!item.avatar"></v-divider>
    </div>
    <div class="preloader" v-if="!isLoadUsers">
      <div class="preloader__row">
        <div class="preloader__item"></div>
        <div class="preloader__item"></div>
      </div>
    </div>
    <p class="message" v-if="lastIndex === 0">Not users.</p>
  </v-list>
</template>

<script>
import UserCard from "./UserCard.vue";
import { mapState } from "vuex";
export default {
  components: { UserCard },
  name: "UsersList",
  props: {
    users: {
      type: Array,
      required: true,
    },
  },

  computed: {
    ...mapState(["isLoadUsers"]),
    lastIndex() {
      return this.users.length - 1;
    },
  },
};
</script>
<style scoped>
.message {
  text-align: center;
  padding-top: 20px;
}

.preloader {
  margin: 15px auto 0;
  width: 100px;
  height: 100px;
  z-index: 1001;
}

.preloader__row {
  position: relative;
  top: 50%;
  left: 50%;
  width: 70px;
  height: 70px;
  margin-top: -35px;
  margin-left: -35px;
  text-align: center;
  animation: preloader-rotate 2s infinite linear;
}

.preloader__item {
  position: absolute;
  display: inline-block;
  top: 0;
  background-color: #337ab7;
  border-radius: 100%;
  width: 35px;
  height: 35px;
  animation: preloader-bounce 1.5s infinite ease-in-out;
}

.preloader__item:last-child {
  top: auto;
  bottom: 0;
  animation-delay: -1s;
}

@keyframes preloader-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes preloader-bounce {
  0%,
  100% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }
}

.loaded_hiding .preloader {
  transition: 0.3s opacity;
  opacity: 0;
}

.loaded .preloader {
  display: none;
}
</style>
