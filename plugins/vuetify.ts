import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi-svg";

const myTheme = {
  dark: false,
  colors: {
    // background: '#000000',
    // surface: '#000000',
    primary: "#89c303",
    'primary-background': '#f2f4f5',
    secondary: "#12595d",

    // 'secondary-darken-1': '#000000',
    // error: '#000000',
    // info: '#000000',
    // success: '#000000',
    // warning: '#000000',
  },
};
export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
    theme: {
      defaultTheme: "myTheme",
      themes: {
        myTheme,
      },
    },
    // icons: {
    //   defaultSet: 'mdi',
    //   aliases,
    //   sets: {
    //     mdi
    //   }
    // }
  });
  nuxt.vueApp.use(vuetify);
});
