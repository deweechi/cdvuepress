import Vuetify from "vuetify";
//import './theme/styles/external/vuetify.css';
import "vuetify/dist/vuetify.min.css";
import 'material-design-icons-iconfont/dist/material-design-icons.css';
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(Vuetify,{});
  options.vuetify = new Vuetify({
    theme: {
      dark:true,
      themes: {
        dark: {
        primary: '#B39DDB',
        secondary: '#424242',
        accent: '#FF4081',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
        }
      }
    },
  })
};