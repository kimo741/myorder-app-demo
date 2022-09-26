import wlecomePage from "src/layouts/WelcomApp.vue"
import wilcomeSlider from "src/pages/welcome-pages/WelcomeSlider.vue"
import login from "src/pages/welcome-pages/Login/LoginPage.vue"
const routes = [
  {
    path:'/welcome',
    component:wlecomePage,
    name:"welcome",
    children:[
      {
        path:'slider',
        component:wilcomeSlider,
        name:"wilcomeSlider",
      },
      {
        path:'login',
        component:login,
        name:"login",
      },

    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
       component: () => import('pages/IndexPage.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
