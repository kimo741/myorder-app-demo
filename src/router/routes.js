//////////////////////////////////////////
///////// wildom and login pages//////////
//////////////////////////////////////////
import { wlecomePage , wilcomeSlider , login , verification ,ForgetPassword, creatNewPassword , RejesterAccount  } from "./container-pages/welcomAndLogin"
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

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
      {
        path:'verification/:phone',
        component:verification,
        name:"verification",
        props:true
      },
      {
        path:'ForgetPassword',
        component:ForgetPassword,
        name:"ForgetPassword",
        props:true
      },
      {
        path:'creatNewPassword',
        component:creatNewPassword,
        name:"creatNewPassword",
      },
      {
        path:'RejesterAccount',
        component:RejesterAccount,
        name:"RejesterAccount",
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
