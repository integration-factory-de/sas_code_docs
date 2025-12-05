import DefaultTheme from 'vitepress/theme';
import Breadcrumbs from './components/Breadcrumbs.vue';
import Footer from './components/Footer.vue';
import Success from './components/labels/Success.vue';
import Danger from './components/labels/Danger.vue';
import Warning from './components/labels/Warning.vue';
import Primary from './components/labels/Primary.vue';
import Reference from './components/labels/Reference.vue';
import Property from './components/labels/Property.vue';
import Role from './components/labels/Role.vue';
import ContextProp from './components/labels/ContextProp.vue';
import DeletedProp from './components/labels/DeletedProp.vue';
import Operator from './components/labels/Operator.vue';
import Util from './components/labels/Util.vue';
import Variable from './components/labels/Variable.vue';
import VioletProp from './components/labels/VioletProp.vue';
import Gold from './components/labels/Gold.vue';
import { h } from 'vue';
import { useData } from 'vitepress';
import './custom.css';
import _ from 'lodash';

import * as Sentry from "@sentry/vue";

Sentry.init({
  dsn: "https://63178542aac5615dfacb976ac284db95@o386721.ingest.us.sentry.io/4507316527038464",
  integrations: [
    Sentry.feedbackIntegration({
      colorScheme: "system",
      formTitle: "Give Feedback",
      submitButtonLabel: "Send Feedback",
      triggerLabel: "Give Feedback",
      messagePlaceholder: "Describe what is missing or wrong in the documentation. We will add or fix this as soon as possible :)",
      nameLabel: "Name (optional)",
      emailLabel: "Email (optional)",
      successMessageText: "Thank you for your feedback!"
    }),
  ],
});

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => {
        const { page } = useData();
        let breadcrumbs = _.get(page.value, ["frontmatter", "breadcrumbs", "/"+page.value.filePath]);
        if (!breadcrumbs || !Array.isArray(breadcrumbs) || breadcrumbs.length === 1) {
          console.log("no breadcrumbs");
          breadcrumbs = [];
        }
        return h(Breadcrumbs, {
          breadcrumbs
        });
      },
      'doc-after': () => {
        return h(Footer);
      }
    })
  },
  enhanceApp({ app }) {
    // register your custom global components
    app.component('Success', Success);
    app.component('Danger', Danger);
    app.component('Primary', Primary);
    app.component('Warning', Warning);
    app.component('Reference', Reference);
    app.component('Property', Property);
    app.component('VioletProp', VioletProp);
    app.component('Role', Role);
    app.component('ContextProp', ContextProp);
    app.component('DeletedProp', DeletedProp);
    app.component('Operator', Operator);
    app.component('Util', Util);
    app.component('Variable', Variable);
    app.component('VioletProp', VioletProp);
    app.component('Gold', Gold);
  }
}
