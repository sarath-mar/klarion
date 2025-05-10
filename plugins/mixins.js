// plugins/myMixin.js
import { myMixin } from '~/utils/mixins';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.mixin(myMixin);  
  });
