<template>
  <v-app>
    <v-main>
      <ContentBlock />
    </v-main>

    <v-footer app v-bind="localAttrs">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import ContentBlock from "./components/ContentBlock";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    ContentBlock,
    Footer,
  },

  computed: {
    localAttrs() {
      const attrs = {};

      attrs.absolute = true;
      attrs.fixed = false;

      return attrs;
    },
  },

  data: () => ({
    //
  }),
};
</script>

<!-- 
  Необходимо разделить содержимое компонента ContentBlock на отдельные компоненты для фильтров и списка пользователей (допускается использование своей вёрстки).

  Добавить в структуру данных списка пользователей users недостающие для фильтрации параметры, и предусмотреть возможность его динамической загрузки из внешнего .json API

  Реализовать фильтрацию универсально, используя Vuex (или другое хранилище состояний) так, что бы состояние фильтров было доступно другим компонентам.
(опционально) Добавить визуальное обозначение процесса фильтрации (preloader).

  Добавить в структуру данных пользователя информацию об адресе проживания и выводить её при клике на портрет.
(опционально) Сопроводить процесс фильтрации "интересным" визуальным переходом (transitions). -->
