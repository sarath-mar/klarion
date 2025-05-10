// plugins/constants.js

import { CONSTANTS } from '~/utils/constants';

export default ({ app }, inject) => {
  inject('CONSTANTS', CONSTANTS);
};
