import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'


export default boot(({ router,app }) => {
  const i18n = createI18n({
    locale: 'en-US',
    globalInjection: true,
    messages
  })
// router.beforeEach((to, _, next) => {
//   var canAccess = localStorage.getItem("first_view");
//   if (to.meta.firstView && !canAccess) {
//     next("/welcome/slider");
//   } else {
//     next();
//   }
// });
  // Set i18n instance on app
  app.use(i18n)
})
